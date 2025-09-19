import{R as H}from"./iframe-9RgTdUv8.js";import"./preload-helper-D9Z9MdNV.js";const l=({variant:m="default",padding:p="medium",shadow:g="none",hoverable:h=!1,clickable:c=!1,children:u,onClick:f,...y})=>{const e="reshaped-card",w=`${e}--${m}`,v=`${e}--padding-${p}`,T=`${e}--shadow-${g}`,b=h?`${e}--hoverable`:"",V=c?`${e}--clickable`:"";return H.createElement("div",{className:`${e} ${w} ${v} ${T} ${b} ${V}`.trim(),onClick:c?f:void 0,...y},u)};l.__docgenInfo={description:"",methods:[],displayName:"Card",props:{variant:{defaultValue:{value:"'default'",computed:!1},required:!1},padding:{defaultValue:{value:"'medium'",computed:!1},required:!1},shadow:{defaultValue:{value:"'none'",computed:!1},required:!1},hoverable:{defaultValue:{value:"false",computed:!1},required:!1},clickable:{defaultValue:{value:"false",computed:!1},required:!1}}};const j={title:"Reshaped Design System/Card",component:l,parameters:{layout:"centered"},argTypes:{variant:{control:{type:"select"},options:["default","elevated","outlined","filled"]},padding:{control:{type:"select"},options:["none","small","medium","large"]},shadow:{control:{type:"select"},options:["none","small","medium","large"]},hoverable:{control:"boolean"},clickable:{control:"boolean"}}},a={args:{children:"This is a default card with some content."},parameters:{design:{type:"figma",url:"https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1"}}},s={args:{variant:"elevated",shadow:"medium",children:"This is an elevated card with shadow."},parameters:{design:{type:"figma",url:"https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1"}}},r={args:{variant:"outlined",children:"This is an outlined card with blue border."},parameters:{design:{type:"figma",url:"https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1"}}},n={args:{variant:"filled",children:"This is a filled card with background color."},parameters:{design:{type:"figma",url:"https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1"}}},i={args:{hoverable:!0,children:"Hover over this card to see the effect!"},parameters:{design:{type:"figma",url:"https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1"}}},t={args:{clickable:!0,children:"Click this card!"},parameters:{design:{type:"figma",url:"https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1"}}},d={args:{padding:"large",children:"This card has large padding for more spacious content."},parameters:{design:{type:"figma",url:"https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1"}}},o={args:{padding:"none",children:"This card has no padding."},parameters:{design:{type:"figma",url:"https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1"}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'This is a default card with some content.'
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1'
    }
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'elevated',
    shadow: 'medium',
    children: 'This is an elevated card with shadow.'
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1'
    }
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    children: 'This is an outlined card with blue border.'
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1'
    }
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'filled',
    children: 'This is a filled card with background color.'
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1'
    }
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    hoverable: true,
    children: 'Hover over this card to see the effect!'
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1'
    }
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    clickable: true,
    children: 'Click this card!'
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1'
    }
  }
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    padding: 'large',
    children: 'This card has large padding for more spacious content.'
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1'
    }
  }
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    padding: 'none',
    children: 'This card has no padding.'
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1'
    }
  }
}`,...o.parameters?.docs?.source}}};const X=["Default","Elevated","Outlined","Filled","Hoverable","Clickable","LargePadding","NoPadding"];export{t as Clickable,a as Default,s as Elevated,n as Filled,i as Hoverable,d as LargePadding,o as NoPadding,r as Outlined,X as __namedExportsOrder,j as default};
