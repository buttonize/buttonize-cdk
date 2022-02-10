# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ButtonizeCustomResource <a name="ButtonizeCustomResource" id="@buttonize/cdk.ButtonizeCustomResource"></a>

#### Initializers <a name="Initializers" id="@buttonize/cdk.ButtonizeCustomResource.Initializer"></a>

```typescript
import { ButtonizeCustomResource } from '@buttonize/cdk'

new ButtonizeCustomResource(scope: Construct, props: ButtonizeCustomResourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@buttonize/cdk.ButtonizeCustomResource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@buttonize/cdk.ButtonizeCustomResource.Initializer.parameter.props">props</a></code> | <code><a href="#@buttonize/cdk.ButtonizeCustomResourceProps">ButtonizeCustomResourceProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@buttonize/cdk.ButtonizeCustomResource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `props`<sup>Required</sup> <a name="props" id="@buttonize/cdk.ButtonizeCustomResource.Initializer.parameter.props"></a>

- *Type:* <a href="#@buttonize/cdk.ButtonizeCustomResourceProps">ButtonizeCustomResourceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@buttonize/cdk.ButtonizeCustomResource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@buttonize/cdk.ButtonizeCustomResource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@buttonize/cdk.ButtonizeCustomResource.addDeletionOverride">addDeletionOverride</a></code> | Syntactic sugar for `addOverride(path, undefined)`. |
| <code><a href="#@buttonize/cdk.ButtonizeCustomResource.addDependsOn">addDependsOn</a></code> | Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned. |
| <code><a href="#@buttonize/cdk.ButtonizeCustomResource.addMetadata">addMetadata</a></code> | Add a value to the CloudFormation Resource Metadata. |
| <code><a href="#@buttonize/cdk.ButtonizeCustomResource.addOverride">addOverride</a></code> | Adds an override to the synthesized CloudFormation resource. |
| <code><a href="#@buttonize/cdk.ButtonizeCustomResource.addPropertyDeletionOverride">addPropertyDeletionOverride</a></code> | Adds an override that deletes the value of a property from the resource definition. |
| <code><a href="#@buttonize/cdk.ButtonizeCustomResource.addPropertyOverride">addPropertyOverride</a></code> | Adds an override to a resource property. |
| <code><a href="#@buttonize/cdk.ButtonizeCustomResource.applyRemovalPolicy">applyRemovalPolicy</a></code> | Sets the deletion policy of the resource based on the removal policy specified. |
| <code><a href="#@buttonize/cdk.ButtonizeCustomResource.getAtt">getAtt</a></code> | Returns a token for an runtime attribute of this resource. |
| <code><a href="#@buttonize/cdk.ButtonizeCustomResource.getMetadata">getMetadata</a></code> | Retrieve a value value from the CloudFormation Resource Metadata. |

---

##### `toString` <a name="toString" id="@buttonize/cdk.ButtonizeCustomResource.toString"></a>

```typescript
public toString()
```

Returns a string representation of this construct.

##### `overrideLogicalId` <a name="overrideLogicalId" id="@buttonize/cdk.ButtonizeCustomResource.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@buttonize/cdk.ButtonizeCustomResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `addDeletionOverride` <a name="addDeletionOverride" id="@buttonize/cdk.ButtonizeCustomResource.addDeletionOverride"></a>

```typescript
public addDeletionOverride(path: string)
```

Syntactic sugar for `addOverride(path, undefined)`.

###### `path`<sup>Required</sup> <a name="path" id="@buttonize/cdk.ButtonizeCustomResource.addDeletionOverride.parameter.path"></a>

- *Type:* string

The path of the value to delete.

---

##### `addDependsOn` <a name="addDependsOn" id="@buttonize/cdk.ButtonizeCustomResource.addDependsOn"></a>

```typescript
public addDependsOn(target: CfnResource)
```

Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned.

This can be used for resources across stacks (or nested stack) boundaries and the dependency will automatically be transferred to the relevant scope.

###### `target`<sup>Required</sup> <a name="target" id="@buttonize/cdk.ButtonizeCustomResource.addDependsOn.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### `addMetadata` <a name="addMetadata" id="@buttonize/cdk.ButtonizeCustomResource.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any)
```

Add a value to the CloudFormation Resource Metadata.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.)

###### `key`<sup>Required</sup> <a name="key" id="@buttonize/cdk.ButtonizeCustomResource.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@buttonize/cdk.ButtonizeCustomResource.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addOverride` <a name="addOverride" id="@buttonize/cdk.ButtonizeCustomResource.addOverride"></a>

```typescript
public addOverride(path: string, value: any)
```

Adds an override to the synthesized CloudFormation resource.

To add a property override, either use `addPropertyOverride` or prefix `path` with "Properties." (i.e. `Properties.TopicName`).  If the override is nested, separate each nested level using a dot (.) in the path parameter. If there is an array as part of the nesting, specify the index in the path.  To include a literal `.` in the property name, prefix with a `\`. In most programming languages you will need to write this as `"\\."` because the `\` itself will need to be escaped.  For example, ```typescript cfnResource.addOverride('Properties.GlobalSecondaryIndexes.0.Projection.NonKeyAttributes', ['myattribute']); cfnResource.addOverride('Properties.GlobalSecondaryIndexes.1.ProjectionType', 'INCLUDE'); ``` would add the overrides ```json "Properties": {    "GlobalSecondaryIndexes": [      {        "Projection": {          "NonKeyAttributes": [ "myattribute" ]          ...        }        ...      },      {        "ProjectionType": "INCLUDE"        ...      },    ]    ... } ```  The `value` argument to `addOverride` will not be processed or translated in any way. Pass raw JSON values in here with the correct capitalization for CloudFormation. If you pass CDK classes or structs, they will be rendered with lowercased key names, and CloudFormation will reject the template.

###### `path`<sup>Required</sup> <a name="path" id="@buttonize/cdk.ButtonizeCustomResource.addOverride.parameter.path"></a>

- *Type:* string

The path of the property, you can use dot notation to override values in complex types.

Any intermdediate keys will be created as needed.

---

###### `value`<sup>Required</sup> <a name="value" id="@buttonize/cdk.ButtonizeCustomResource.addOverride.parameter.value"></a>

- *Type:* any

The value.

Could be primitive or complex.

---

##### `addPropertyDeletionOverride` <a name="addPropertyDeletionOverride" id="@buttonize/cdk.ButtonizeCustomResource.addPropertyDeletionOverride"></a>

```typescript
public addPropertyDeletionOverride(propertyPath: string)
```

Adds an override that deletes the value of a property from the resource definition.

###### `propertyPath`<sup>Required</sup> <a name="propertyPath" id="@buttonize/cdk.ButtonizeCustomResource.addPropertyDeletionOverride.parameter.propertyPath"></a>

- *Type:* string

The path to the property.

---

##### `addPropertyOverride` <a name="addPropertyOverride" id="@buttonize/cdk.ButtonizeCustomResource.addPropertyOverride"></a>

```typescript
public addPropertyOverride(propertyPath: string, value: any)
```

Adds an override to a resource property.

Syntactic sugar for `addOverride("Properties.<...>", value)`.

###### `propertyPath`<sup>Required</sup> <a name="propertyPath" id="@buttonize/cdk.ButtonizeCustomResource.addPropertyOverride.parameter.propertyPath"></a>

- *Type:* string

The path of the property.

---

###### `value`<sup>Required</sup> <a name="value" id="@buttonize/cdk.ButtonizeCustomResource.addPropertyOverride.parameter.value"></a>

- *Type:* any

The value.

---

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@buttonize/cdk.ButtonizeCustomResource.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy?: RemovalPolicy, options?: RemovalPolicyOptions)
```

Sets the deletion policy of the resource based on the removal policy specified.

The Removal Policy controls what happens to this resource when it stops being managed by CloudFormation, either because you've removed it from the CDK application or because you've made a change that requires the resource to be replaced.  The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Optional</sup> <a name="policy" id="@buttonize/cdk.ButtonizeCustomResource.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

###### `options`<sup>Optional</sup> <a name="options" id="@buttonize/cdk.ButtonizeCustomResource.applyRemovalPolicy.parameter.options"></a>

- *Type:* aws-cdk-lib.RemovalPolicyOptions

---

##### `getAtt` <a name="getAtt" id="@buttonize/cdk.ButtonizeCustomResource.getAtt"></a>

```typescript
public getAtt(attributeName: string)
```

Returns a token for an runtime attribute of this resource.

Ideally, use generated attribute accessors (e.g. `resource.arn`), but this can be used for future compatibility in case there is no generated attribute.

###### `attributeName`<sup>Required</sup> <a name="attributeName" id="@buttonize/cdk.ButtonizeCustomResource.getAtt.parameter.attributeName"></a>

- *Type:* string

The name of the attribute.

---

##### `getMetadata` <a name="getMetadata" id="@buttonize/cdk.ButtonizeCustomResource.getMetadata"></a>

```typescript
public getMetadata(key: string)
```

Retrieve a value value from the CloudFormation Resource Metadata.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.)

###### `key`<sup>Required</sup> <a name="key" id="@buttonize/cdk.ButtonizeCustomResource.getMetadata.parameter.key"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@buttonize/cdk.ButtonizeCustomResource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@buttonize/cdk.ButtonizeCustomResource.isCfnElement">isCfnElement</a></code> | Returns `true` if a construct is a stack element (i.e. part of the synthesized cloudformation template). |
| <code><a href="#@buttonize/cdk.ButtonizeCustomResource.isCfnResource">isCfnResource</a></code> | Check whether the given construct is a CfnResource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@buttonize/cdk.ButtonizeCustomResource.isConstruct"></a>

```typescript
import { ButtonizeCustomResource } from '@buttonize/cdk'

ButtonizeCustomResource.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@buttonize/cdk.ButtonizeCustomResource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isCfnElement` <a name="isCfnElement" id="@buttonize/cdk.ButtonizeCustomResource.isCfnElement"></a>

```typescript
import { ButtonizeCustomResource } from '@buttonize/cdk'

ButtonizeCustomResource.isCfnElement(x: any)
```

Returns `true` if a construct is a stack element (i.e. part of the synthesized cloudformation template).

Uses duck-typing instead of `instanceof` to allow stack elements from different versions of this library to be included in the same stack.

###### `x`<sup>Required</sup> <a name="x" id="@buttonize/cdk.ButtonizeCustomResource.isCfnElement.parameter.x"></a>

- *Type:* any

---

##### `isCfnResource` <a name="isCfnResource" id="@buttonize/cdk.ButtonizeCustomResource.isCfnResource"></a>

```typescript
import { ButtonizeCustomResource } from '@buttonize/cdk'

ButtonizeCustomResource.isCfnResource(construct: IConstruct)
```

Check whether the given construct is a CfnResource.

###### `construct`<sup>Required</sup> <a name="construct" id="@buttonize/cdk.ButtonizeCustomResource.isCfnResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@buttonize/cdk.ButtonizeCustomResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@buttonize/cdk.ButtonizeCustomResource.property.creationStack">creationStack</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@buttonize/cdk.ButtonizeCustomResource.property.logicalId">logicalId</a></code> | <code>string</code> | The logical ID for this CloudFormation stack element. |
| <code><a href="#@buttonize/cdk.ButtonizeCustomResource.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this element is defined. |
| <code><a href="#@buttonize/cdk.ButtonizeCustomResource.property.ref">ref</a></code> | <code>string</code> | Return a string that will be resolved to a CloudFormation `{ Ref }` for this element. |
| <code><a href="#@buttonize/cdk.ButtonizeCustomResource.property.cfnOptions">cfnOptions</a></code> | <code>aws-cdk-lib.ICfnResourceOptions</code> | Options for this resource, such as condition, update policy etc. |
| <code><a href="#@buttonize/cdk.ButtonizeCustomResource.property.cfnResourceType">cfnResourceType</a></code> | <code>string</code> | AWS resource type. |

---

##### `node`<sup>Required</sup> <a name="node" id="@buttonize/cdk.ButtonizeCustomResource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@buttonize/cdk.ButtonizeCustomResource.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

---

##### `logicalId`<sup>Required</sup> <a name="logicalId" id="@buttonize/cdk.ButtonizeCustomResource.property.logicalId"></a>

```typescript
public readonly logicalId: string;
```

- *Type:* string

The logical ID for this CloudFormation stack element.

The logical ID of the element is calculated from the path of the resource node in the construct tree.  To override this value, use `overrideLogicalId(newLogicalId)`.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@buttonize/cdk.ButtonizeCustomResource.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this element is defined.

CfnElements must be defined within a stack scope (directly or indirectly).

---

##### `ref`<sup>Required</sup> <a name="ref" id="@buttonize/cdk.ButtonizeCustomResource.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

Return a string that will be resolved to a CloudFormation `{ Ref }` for this element.

If, by any chance, the intrinsic reference of a resource is not a string, you could coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.

---

##### `cfnOptions`<sup>Required</sup> <a name="cfnOptions" id="@buttonize/cdk.ButtonizeCustomResource.property.cfnOptions"></a>

```typescript
public readonly cfnOptions: ICfnResourceOptions;
```

- *Type:* aws-cdk-lib.ICfnResourceOptions

Options for this resource, such as condition, update policy etc.

---

##### `cfnResourceType`<sup>Required</sup> <a name="cfnResourceType" id="@buttonize/cdk.ButtonizeCustomResource.property.cfnResourceType"></a>

```typescript
public readonly cfnResourceType: string;
```

- *Type:* string

AWS resource type.

---


## Structs <a name="Structs" id="Structs"></a>

### ButtonizeCustomResourceProps <a name="ButtonizeCustomResourceProps" id="@buttonize/cdk.ButtonizeCustomResourceProps"></a>

#### Initializer <a name="Initializer" id="@buttonize/cdk.ButtonizeCustomResourceProps.Initializer"></a>

```typescript
import { ButtonizeCustomResourceProps } from '@buttonize/cdk'

const buttonizeCustomResourceProps: ButtonizeCustomResourceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@buttonize/cdk.ButtonizeCustomResourceProps.property.resource">resource</a></code> | <code><a href="#@buttonize/cdk.LambdaResource">LambdaResource</a></code> | *No description.* |
| <code><a href="#@buttonize/cdk.ButtonizeCustomResourceProps.property.widget">widget</a></code> | <code><a href="#@buttonize/cdk.Widget">Widget</a></code> | *No description.* |
| <code><a href="#@buttonize/cdk.ButtonizeCustomResourceProps.property.apiKey">apiKey</a></code> | <code>string</code> | *No description.* |

---

##### `resource`<sup>Required</sup> <a name="resource" id="@buttonize/cdk.ButtonizeCustomResourceProps.property.resource"></a>

```typescript
public readonly resource: LambdaResource;
```

- *Type:* <a href="#@buttonize/cdk.LambdaResource">LambdaResource</a>

---

##### `widget`<sup>Required</sup> <a name="widget" id="@buttonize/cdk.ButtonizeCustomResourceProps.property.widget"></a>

```typescript
public readonly widget: Widget;
```

- *Type:* <a href="#@buttonize/cdk.Widget">Widget</a>

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@buttonize/cdk.ButtonizeCustomResourceProps.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

---

### ButtonizeLambdaEventSourceOptions <a name="ButtonizeLambdaEventSourceOptions" id="@buttonize/cdk.ButtonizeLambdaEventSourceOptions"></a>

#### Initializer <a name="Initializer" id="@buttonize/cdk.ButtonizeLambdaEventSourceOptions.Initializer"></a>

```typescript
import { ButtonizeLambdaEventSourceOptions } from '@buttonize/cdk'

const buttonizeLambdaEventSourceOptions: ButtonizeLambdaEventSourceOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@buttonize/cdk.ButtonizeLambdaEventSourceOptions.property.apiKey">apiKey</a></code> | <code>string</code> | *No description.* |

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@buttonize/cdk.ButtonizeLambdaEventSourceOptions.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

---

### LambdaResource <a name="LambdaResource" id="@buttonize/cdk.LambdaResource"></a>

#### Initializer <a name="Initializer" id="@buttonize/cdk.LambdaResource.Initializer"></a>

```typescript
import { LambdaResource } from '@buttonize/cdk'

const lambdaResource: LambdaResource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@buttonize/cdk.LambdaResource.property.lambdaArn">lambdaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@buttonize/cdk.LambdaResource.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `lambdaArn`<sup>Required</sup> <a name="lambdaArn" id="@buttonize/cdk.LambdaResource.property.lambdaArn"></a>

```typescript
public readonly lambdaArn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@buttonize/cdk.LambdaResource.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

### Widget <a name="Widget" id="@buttonize/cdk.Widget"></a>

#### Initializer <a name="Initializer" id="@buttonize/cdk.Widget.Initializer"></a>

```typescript
import { Widget } from '@buttonize/cdk'

const widget: Widget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@buttonize/cdk.Widget.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@buttonize/cdk.Widget.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="@buttonize/cdk.Widget.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@buttonize/cdk.Widget.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

## Classes <a name="Classes" id="Classes"></a>

### ButtonizeApiKey <a name="ButtonizeApiKey" id="@buttonize/cdk.ButtonizeApiKey"></a>

#### Initializers <a name="Initializers" id="@buttonize/cdk.ButtonizeApiKey.Initializer"></a>

```typescript
import { ButtonizeApiKey } from '@buttonize/cdk'

new ButtonizeApiKey()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@buttonize/cdk.ButtonizeApiKey.setDefaultApiKey">setDefaultApiKey</a></code> | *No description.* |

---

##### `setDefaultApiKey` <a name="setDefaultApiKey" id="@buttonize/cdk.ButtonizeApiKey.setDefaultApiKey"></a>

```typescript
import { ButtonizeApiKey } from '@buttonize/cdk'

ButtonizeApiKey.setDefaultApiKey(scope: Construct, apiKey: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="@buttonize/cdk.ButtonizeApiKey.setDefaultApiKey.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `apiKey`<sup>Required</sup> <a name="apiKey" id="@buttonize/cdk.ButtonizeApiKey.setDefaultApiKey.parameter.apiKey"></a>

- *Type:* string

---



### ButtonizeLambdaEventSource <a name="ButtonizeLambdaEventSource" id="@buttonize/cdk.ButtonizeLambdaEventSource"></a>

- *Implements:* aws-cdk-lib.aws_lambda.IEventSource

#### Initializers <a name="Initializers" id="@buttonize/cdk.ButtonizeLambdaEventSource.Initializer"></a>

```typescript
import { ButtonizeLambdaEventSource } from '@buttonize/cdk'

new ButtonizeLambdaEventSource(widgetProps: Widget, options?: ButtonizeLambdaEventSourceOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@buttonize/cdk.ButtonizeLambdaEventSource.Initializer.parameter.widgetProps">widgetProps</a></code> | <code><a href="#@buttonize/cdk.Widget">Widget</a></code> | *No description.* |
| <code><a href="#@buttonize/cdk.ButtonizeLambdaEventSource.Initializer.parameter.options">options</a></code> | <code><a href="#@buttonize/cdk.ButtonizeLambdaEventSourceOptions">ButtonizeLambdaEventSourceOptions</a></code> | *No description.* |

---

##### `widgetProps`<sup>Required</sup> <a name="widgetProps" id="@buttonize/cdk.ButtonizeLambdaEventSource.Initializer.parameter.widgetProps"></a>

- *Type:* <a href="#@buttonize/cdk.Widget">Widget</a>

---

##### `options`<sup>Optional</sup> <a name="options" id="@buttonize/cdk.ButtonizeLambdaEventSource.Initializer.parameter.options"></a>

- *Type:* <a href="#@buttonize/cdk.ButtonizeLambdaEventSourceOptions">ButtonizeLambdaEventSourceOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@buttonize/cdk.ButtonizeLambdaEventSource.bind">bind</a></code> | Called by `lambda.addEventSource` to allow the event source to bind to this function. |

---

##### `bind` <a name="bind" id="@buttonize/cdk.ButtonizeLambdaEventSource.bind"></a>

```typescript
public bind(target: IFunction)
```

Called by `lambda.addEventSource` to allow the event source to bind to this function.

###### `target`<sup>Required</sup> <a name="target" id="@buttonize/cdk.ButtonizeLambdaEventSource.bind.parameter.target"></a>

- *Type:* aws-cdk-lib.aws_lambda.IFunction

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@buttonize/cdk.ButtonizeLambdaEventSource.property.widgetProps">widgetProps</a></code> | <code><a href="#@buttonize/cdk.Widget">Widget</a></code> | *No description.* |
| <code><a href="#@buttonize/cdk.ButtonizeLambdaEventSource.property.options">options</a></code> | <code><a href="#@buttonize/cdk.ButtonizeLambdaEventSourceOptions">ButtonizeLambdaEventSourceOptions</a></code> | *No description.* |

---

##### `widgetProps`<sup>Required</sup> <a name="widgetProps" id="@buttonize/cdk.ButtonizeLambdaEventSource.property.widgetProps"></a>

```typescript
public readonly widgetProps: Widget;
```

- *Type:* <a href="#@buttonize/cdk.Widget">Widget</a>

---

##### `options`<sup>Optional</sup> <a name="options" id="@buttonize/cdk.ButtonizeLambdaEventSource.property.options"></a>

```typescript
public readonly options: ButtonizeLambdaEventSourceOptions;
```

- *Type:* <a href="#@buttonize/cdk.ButtonizeLambdaEventSourceOptions">ButtonizeLambdaEventSourceOptions</a>

---



