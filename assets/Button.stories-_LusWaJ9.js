import{R as w}from"./iframe-CjHYMxdS.js";import"./preload-helper-D9Z9MdNV.js";const d=({variant:c="primary",size:p="medium",disabled:o=!1,children:g,onClick:l,...u})=>{const e="reshaped-button",y=`${e}--${c}`,h=`${e}--${p}`,f=o?`${e}--disabled`:"";return w.createElement("button",{type:"button",className:`${e} ${y} ${h} ${f}`.trim(),disabled:o,onClick:l,...u},g)};d.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{defaultValue:{value:"'primary'",computed:!1},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const z={title:"Reshaped Design System/Button",component:d,parameters:{layout:"centered"},argTypes:{variant:{control:{type:"select"},options:["primary","secondary","outline","ghost"]},size:{control:{type:"select"},options:["small","medium","large"]},disabled:{control:"boolean"},children:{control:"text"}}},a={args:{variant:"primary",size:"medium",children:"Primary Button"},parameters:{design:{type:"figma",url:"https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1"}}},s={args:{variant:"secondary",size:"medium",children:"Secondary Button"},parameters:{design:{type:"figma",url:"https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1"}}},r={args:{variant:"outline",size:"medium",children:"Outline Button"},parameters:{design:{type:"figma",url:"https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1"}}},n={args:{variant:"ghost",size:"medium",children:"Ghost Button"},parameters:{design:{type:"figma",url:"https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1"}}},t={args:{variant:"primary",size:"small",children:"Small Button"},parameters:{design:{type:"figma",url:"https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1"}}},i={args:{variant:"primary",size:"large",children:"Large Button"},parameters:{design:{type:"figma",url:"https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1"}}},m={args:{variant:"primary",size:"medium",children:"Disabled Button",disabled:!0},parameters:{design:{type:"figma",url:"https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1"}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'Primary Button'
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1'
    }
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    size: 'medium',
    children: 'Secondary Button'
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1'
    }
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    size: 'medium',
    children: 'Outline Button'
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1'
    }
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    size: 'medium',
    children: 'Ghost Button'
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1'
    }
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'small',
    children: 'Small Button'
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1'
    }
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'large',
    children: 'Large Button'
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1'
    }
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'Disabled Button',
    disabled: true
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1'
    }
  }
}`,...m.parameters?.docs?.source}}};const R=["Primary","Secondary","Outline","Ghost","Small","Large","Disabled"];export{m as Disabled,n as Ghost,i as Large,r as Outline,a as Primary,s as Secondary,t as Small,R as __namedExportsOrder,z as default};
