import{R as a}from"./iframe-CjHYMxdS.js";import"./preload-helper-D9Z9MdNV.js";const g=({type:u="text",placeholder:h="",disabled:o=!1,error:d=!1,size:y="medium",label:m="",helperText:c="",...f})=>{const e="reshaped-input",w=`${e}--${y}`,b=d?`${e}--error`:"",T=o?`${e}--disabled`:"";return a.createElement("div",{className:`${e}-wrapper`},m&&a.createElement("label",{className:`${e}-label`},m),a.createElement("input",{type:u,className:`${e} ${w} ${b} ${T}`.trim(),placeholder:h,disabled:o,...f}),c&&a.createElement("span",{className:`${e}-helper ${d?`${e}-helper--error`:""}`},c))};g.__docgenInfo={description:"",methods:[],displayName:"Input",props:{type:{defaultValue:{value:"'text'",computed:!1},required:!1},placeholder:{defaultValue:{value:"''",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},error:{defaultValue:{value:"false",computed:!1},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},required:!1},label:{defaultValue:{value:"''",computed:!1},required:!1},helperText:{defaultValue:{value:"''",computed:!1},required:!1}}};const E={title:"Reshaped Design System/Input",component:g,parameters:{layout:"centered"},argTypes:{type:{control:{type:"select"},options:["text","email","password","number","tel"]},size:{control:{type:"select"},options:["small","medium","large"]},disabled:{control:"boolean"},error:{control:"boolean"},placeholder:{control:"text"},label:{control:"text"},helperText:{control:"text"}}},s={args:{placeholder:"Enter text...",label:"Label"},parameters:{design:{type:"figma",url:"https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1"}}},r={args:{placeholder:"Enter your email",label:"Email",helperText:"We will never share your email"},parameters:{design:{type:"figma",url:"https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1"}}},t={args:{placeholder:"Enter text...",label:"Label",error:!0,helperText:"This field is required"},parameters:{design:{type:"figma",url:"https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1"}}},l={args:{placeholder:"Disabled input",label:"Label",disabled:!0},parameters:{design:{type:"figma",url:"https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1"}}},n={args:{size:"small",placeholder:"Small input",label:"Small"},parameters:{design:{type:"figma",url:"https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1"}}},i={args:{size:"large",placeholder:"Large input",label:"Large"},parameters:{design:{type:"figma",url:"https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1"}}},p={args:{type:"password",placeholder:"Enter password",label:"Password",helperText:"Must be at least 8 characters"},parameters:{design:{type:"figma",url:"https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1"}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...',
    label: 'Label'
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1'
    }
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter your email',
    label: 'Email',
    helperText: 'We will never share your email'
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1'
    }
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...',
    label: 'Label',
    error: true,
    helperText: 'This field is required'
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1'
    }
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Disabled input',
    label: 'Label',
    disabled: true
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1'
    }
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small',
    placeholder: 'Small input',
    label: 'Small'
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1'
    }
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    placeholder: 'Large input',
    label: 'Large'
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1'
    }
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'password',
    placeholder: 'Enter password',
    label: 'Password',
    helperText: 'Must be at least 8 characters'
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/h7mb0PPczpHRIkViaHy2YO/Reshaped-Design-System?node-id=8284-2&t=X7TETj9XjKVcev9y-1'
    }
  }
}`,...p.parameters?.docs?.source}}};const R=["Default","WithHelperText","Error","Disabled","Small","Large","Password"];export{s as Default,l as Disabled,t as Error,i as Large,p as Password,n as Small,r as WithHelperText,R as __namedExportsOrder,E as default};
