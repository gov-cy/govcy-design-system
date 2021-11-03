# Layout
The design system utilizes the containers and grid system described below.

## Breakpoints
The table below illustrates the six default breakpoints, for building responsively.

The default maximum container width is 1400px

<div class="table-responsive">
<table class="table">
    <thead>
        <tr>
        <th>Breakpoint</th>
        <th>Class infix</th>
        <th>Dimensions</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td>X-Small</td>
        <td><em>None</em></td>
        <td>&lt;576px</td>
        </tr>
        <tr>
        <td>Small</td>
        <td><code>sm</code></td>
        <td>≥576px</td>
        </tr>
        <tr>
        <td>Medium</td>
        <td><code>md</code></td>
        <td>≥768px</td>
        </tr>
        <tr>
        <td>Large</td>
        <td><code>lg</code></td>
        <td>≥992px</td>
        </tr>
        <tr>
        <td>Extra large</td>
        <td><code>xl</code></td>
        <td>≥1200px</td>
        </tr>
        <tr>
        <td>Extra extra large</td>
        <td><code>xxl</code></td>
        <td>≥1400px</td>
        </tr>
    </tbody>
    </table>
</div>

For more information from [Bootstrap](https://getbootstrap.com/docs/5.1/layout/breakpoints/).

## Containers
Containers are the most basic layout element in the design system and are **required when using our default grid system**. Containers are used to contain, pad, and (sometimes) center the content within them. While containers can be nested, most layouts do not require a nested container.

The design system comes with three different containers:

- `.container`, which sets a `max-width` at each responsive breakpoint
- `.container-fluid`, which is `width: 100%` at all breakpoints
- `.container-{breakpoint}`, which is `width: 100%` until the specified breakpoint

For more information from [Bootstrap](https://getbootstrap.com/docs/5.1/layout/containers/).

## Grid
The grid system uses a series of containers, rows, and columns to layout and align content.

Design for small screens first, starting with a single-column layout.

<div class="example-box">
    <div class="container">
    <div class="row">
        <div class="col">
        Column
        </div>
        <div class="col">
        Column
        </div>
        <div class="col">
        Column
        </div>
    </div>
    </div>
</div>

```html
<div class="container">
  <div class="row">
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
  </div>
</div>
```

The above example creates three equal-width columns across all devices and viewports using our predefined grid classes. Those columns are centered in the page with the parent `.container`.

There are **12 template columns available per row**, allowing you to create different combinations of elements that span any number of columns. Column classes indicate the number of template columns to span (e.g., `col-4` spans four widths) are set in percentages so you always have the same relative sizing.

The columns support the **6 breakpoints** described above, meaning you can control container and column sizing and behavior by each breakpoint (e.g., `.col-sm-4` applies to `sm`, `md`, `lg`, `xl`, and `xxl`) as shown in the example below.

<div class="example-box">
    <div class="container">
    <div class="row">
        <div class="col-md-8">col-8</div>
        <div class="col-md-4">col-4</div>
    </div>
    </div>
</div>

```html
<div class="container">
  <div class="row">
    <div class="col-md-8">col-8</div>
    <div class="col-md-4">col-4</div>
  </div>
</div>
```

For more information from [Bootstrap](https://getbootstrap.com/docs/5.1/layout/grid/).