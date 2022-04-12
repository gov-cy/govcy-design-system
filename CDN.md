# govcy-design-system CDN
Write up of how to create an Azure CDN for GOV.CY Design System and update it via Github Actions

## Creating the CDN/ Storage 

### Setting Up Storage

The Azure CDN just provides a web optimised, globally distributed way to access files in Azure Storage Accounts. So the first step is to set up storage.

The documentation on Microsoft's [quickstart guide](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-portal) should be sufficient for you to upload a test file to a Storage Account Container.

> :warning: Bare in mind that the Storage Account Container 'name' attribute will be used in the path for your cdn. For example:
```
    https://<CDN_ENDPOINT_NAME>.azureedge.net/<STORAGE_ACCOUNT_CONTAINER_NAME>/<BLOB_NAME>
```

### Setting Up the CDN

Next we want to attach a 'Azure CDN Profile' to the storage we created above. Head to the portal to [create a CDN](https://portal.azure.com/#create/Microsoft.CDN).

The important settings on this page are near the bottom. You want to pick sensible values for the form then check the `Create a new CDN endpoint` checkbox.

First, select `Origin Type = Storage` and set `Origin Hostname = <STORAGE_ACCOUNT_CONTAINER_NAME>` that you created above.

For `CDN endpoint name` be aware that this will form the subdomain of your CDNs URL.

```
https://<CDN_ENDPOINT_NAME>.azureedge.net/<STORAGE_ACCOUNT_CONTAINER_NAME>/<BLOB_NAME>
```


## Getting Credentials

### Credentials for Github to access Azure

We need [Github Actions]() to be able to push files to the CDN. To do this it needs credentials from [Azure]().

The way credentials work on Azure is we identify a role (a set of operations/ actions) and then the scope (things that can be operated on).

#### Role (what operations can be performed)

We want to give Github the minimum possible access to our Azure account. We can [customise the access level](https://docs.microsoft.com/en-us/azure/storage/blobs/authorize-data-operations-portal) and should pick a [storage-account-contributor role](https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#storage-account-contributor). This role gives Github Actions authorization to manage/ administer resources under a given scope.

#### Resource (on what can operations be performed)

We then need to identify the Azure Resource ID of the Azure Blob Storage Container we are using for the CDN files.
This can be done by navigating to the Storage Account in the [Azure Portal]() and selecting `Settings->Endpoints->Blob service->Resource ID`.

The string should look something like:

```
/subscriptions/{SUBSCRIPTION_ID}}/resourceGroups/{RESOURCE_GROUP}/providers/Microsoft.Storage/storageAccounts/{STORAGE_ACCOUNT_NAME}/blobServices/default
```

#### Getting the Credentials

Combining the [Role]() and [Resource]() information we can means we can create credentals that will only be able to read, manage and delete files in the GOVCY Design System Storage Account.

As per [this tutorial on how to allow github actions to upload a 'site' to Azure Storage](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-static-site-github-actions) you can use the [Azure Portal Cloudshell](https://portal.azure.com/#cloudshell/) to create an `RBAC` or 'role based access credential'

```
name@Azure:~$ az ad sp create-for-rbac 
  --name {A_NAME_FOR_THIS_CREDENTIAL}
  --role contributor
  --scopes /subscriptions/{SUBSCRIPTION_ID}}/resourceGroups/{RESOURCE_GROUP}/providers/Microsoft.Storage/storageAccounts/{STORAGE_ACCOUNT_NAME}/blobServices/default
  --sdk-auth

{
  "clientId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "clientSecret": "xxxxxxxxxxxxxxxxxxxxxxxx",
  "subscriptionId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "tenantId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
}

```

#### Caching control

For our CDN we should be caching versioned files but not unversioned (ie 'latest'). This is because a cached version of latest would become out of date whenever latest is updated and we have no way of invalidating that cache.

You can read how to manage caching on the Azure Docs here:

[Control Azure CDN caching behavior with caching rules](https://docs.microsoft.com/en-us/azure/cdn/cdn-caching-rules)
