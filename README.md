# the bhaskara ui

The idea is to provide few simple UI tools.
Inspired by http://youmightnotneedjquery.com/ and angularjs v1

## `glue`

This can glue html and javascript seamlessly 
syntax is like angularjs version 1.

Code is very small and simple.

For now see test.html for an example

### Advantages
1. It is very light weight compared to any standard view-model kind of libraries.
2. Handles many view-model glue scenarions.
3. Simple to use.
4. Helpful for component/modular/widget based development.
5. It is independent.

## API reference

### `glue(options)`

This function makes an instantiable object(as a class object).

#### `options.controller`

User can define a controlling function. `context` will be passed to this function with few util functions that can be used to glue. Also `context` will be returned to the instance object created for this. So all the following functions will be available in the instance too.

##### `context.$get(propertyName)`

Provide property name to get its value.

##### `context.$set(propertyName, value)`

Provide property name and value to set that property. This triggers binding value to DOM.

##### `context.$properties`

A reference to the source object where `$get` and `$set` executes.

> Note: do not try to set things directly to this property if you want glue to work for this property.

##### `context.$elements`

This provides a refenece to the array of elements glued for this component instance.

> this can be instantiated using `document.querySelectorAll()`.

##### `context.$id`

This provides id generated by `glue` for this component instance.

##### `context.$name`

This provides name assiged by user or generated by `glue` for this component.

##### `context.$options`

This provides reference to options assiged by user for this component.

##### `context.$options`

This provides reference to options assiged by user for this component.

##### `context.$setCss(cssString)`

This adds a personal CSS for this component.

##### `context.$setHtml(htmlString)`

This detaches previous elements and creates new DOM out of `htmlString` provided and glues it to the context.

##### `context.$setElements(elements)`

This detaches previous elements and glues it to the new set of `elements` provided.

##### `context.$listeners`

This provides the reference to all the events that are attached.

##### `context.$detachEvents([namespace])`

This function makes `glue` detach events by `namespace`. If `namespace` is not provided, `glue` detaches all events of this component instance. 

##### `context.$propertyBindings`

This provides the reference to all the properties that are bound for this component instance.

##### `context.$removePropertyBindings(namespace)`

This function makes `glue` detach property bindings by `namespace`. If `namespace` is not provided, `glue` detaches all property bindings of this component instance. 

##### `context.$destroy()`

This function should be called to purge the component instance properly. 

#### `options.css`

User can assign a css style definition string. `glue` adds this stylesheet to DOM when the first instance would be made.

> Note: we are not doing any preprocessing yet. So user will have to make the stylesheet having styles along with the component name. Component name can be provided with `options.name` property.

#### `options.html`

User can assign a html string. `glue` will create DOM elements and glues it up with the controller.

#### `options.name`

User can assign a name to component. `glue` adds this name to the root element. So this can be used to write styles as you need that can be specific to the component. 

> Note: all the instances made from this component will have same name. 

#### `options.elements`

User can assign elements already loaded into DOM using `document.querySelectorAll('<selector>')`

## Pending or ongoing activities
* make more binders
* optimize the functions
* make css framework.
* make components like dropdown, table, toggle button, etc.

## Interested developers can join hands to make thebhaskaraui better.
