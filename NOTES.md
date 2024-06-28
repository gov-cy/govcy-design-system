# How to

## Visual regression test
The purpose is to test if changes break the expected look of design elements. 

### 1. Set PERCY_TOKEN 

Set percy token to connect your percy account and project with the tests

```powershell
#on powershell
$env:PERCY_TOKEN = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
#on windows
set PERCY_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx 
# On Unix 
export PERCY_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
#on javascript
const percy = await Percy.start({"token": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",})
```

### 2. Start the server 

Run `npm start`

### 2. Run test 

Run `npm run test-visual`