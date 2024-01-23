"use strict";(self.webpackChunk_inlog_react_components=self.webpackChunk_inlog_react_components||[]).push([[635],{"./src/stories/components/Modal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Modal_stories});var react=__webpack_require__("./node_modules/react/index.js"),DialogTitle=__webpack_require__("./node_modules/@mui/material/DialogTitle/DialogTitle.js"),DialogContent=__webpack_require__("./node_modules/@mui/material/DialogContent/DialogContent.js"),DialogActions=__webpack_require__("./node_modules/@mui/material/DialogActions/DialogActions.js"),IconButton=__webpack_require__("./node_modules/@mui/material/IconButton/IconButton.js"),Fullscreen=__webpack_require__("./node_modules/@mui/icons-material/Fullscreen.js"),FullscreenExit=__webpack_require__("./node_modules/@mui/icons-material/FullscreenExit.js"),Close=__webpack_require__("./node_modules/@mui/icons-material/Close.js"),CircularProgress=__webpack_require__("./node_modules/@mui/material/CircularProgress/CircularProgress.js"),cjs=__webpack_require__("./node_modules/react-draggable/build/cjs/cjs.js"),cjs_default=__webpack_require__.n(cjs),Paper=__webpack_require__("./node_modules/@mui/material/Paper/Paper.js"),Button=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),Dialog=__webpack_require__("./node_modules/@mui/material/Dialog/Dialog.js");const StyledDialog=(0,emotion_styled_browser_esm.Z)(Dialog.Z)`
  .MuiDialog-paper {
    min-width: ${props=>props.minWidth||"70vw"};
    min-height: ${props=>props.minHeight||"70vh"};
  }
  .MuiDialogContent-root {
    display: flex;
    flex-direction: column;
  }
  .RootContent {
    position: relative;
    padding: ${props=>props.noPadding?0:"20px 24px"};
  }
`,Subtitle=(emotion_styled_browser_esm.Z.h4``,emotion_styled_browser_esm.Z.h6``),Row=emotion_styled_browser_esm.Z.div`
  display: flex;
  align-items: center;
`,DialogHeader=emotion_styled_browser_esm.Z.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e0e0e0;
  padding-right: 15px;
`,LoadingRoot=emotion_styled_browser_esm.Z.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  z-index: 9;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const DraggableDialog=({children,...props})=>(0,jsx_runtime.jsx)(cjs_default(),{children:(0,jsx_runtime.jsx)(Paper.Z,{...props,children})});DraggableDialog.displayName="DraggableDialog";const Modal=(0,react.forwardRef)(((props,ref)=>{const{title,subtitle,actions=[],loading=!1,draggable=!1,onCLose,hideTopButtons,noPadding}=props,[open,setOpen]=(0,react.useState)(!1),[fullScreen,setFullScreen]=(0,react.useState)(!1),handleClose=()=>{setOpen(!1),setFullScreen(!1),onCLose&&onCLose()};return(0,react.useImperativeHandle)(ref,(()=>({openModal:()=>setOpen(!0),closeModal:()=>setOpen(!1)}))),(0,jsx_runtime.jsxs)(StyledDialog,{maxWidth:"lg",open,onClose:handleClose,fullScreen,PaperComponent:draggable?DraggableDialog:void 0,minHeight:props.minHeight,minWidth:props.minWidth,noPadding,children:[(0,jsx_runtime.jsxs)(DialogHeader,{children:[(0,jsx_runtime.jsx)(DialogTitle.Z,{children:title}),(0,jsx_runtime.jsxs)(Row,{children:[(0,jsx_runtime.jsx)(Subtitle,{children:subtitle}),!hideTopButtons&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(IconButton.Z,{onClick:()=>{setFullScreen(!fullScreen)},children:fullScreen?(0,jsx_runtime.jsx)(FullscreenExit.Z,{}):(0,jsx_runtime.jsx)(Fullscreen.Z,{})}),(0,jsx_runtime.jsx)(IconButton.Z,{onClick:handleClose,children:(0,jsx_runtime.jsx)(Close.Z,{})})]})]})]}),(0,jsx_runtime.jsxs)(DialogContent.Z,{className:"RootContent",children:[loading&&(0,jsx_runtime.jsx)(LoadingRoot,{children:(0,jsx_runtime.jsx)(CircularProgress.Z,{})}),open&&props.children]}),(0,jsx_runtime.jsx)(DialogActions.Z,{children:actions.map((action=>"string"==typeof action.label?(0,jsx_runtime.jsx)(Button.Z,{className:action.className,style:action.customStyle,onClick:action.onClick,color:action.color,children:action.label},`moda-action-button-${action.id}`):(0,jsx_runtime.jsx)("div",{className:action.className,style:action.customStyle,onClick:action.onClick,color:action.color,children:action.label},`moda-action-button-${action.id}`)))})]})})),Modal_Modal=Modal;try{Modal.displayName="Modal",Modal.__docgenInfo={description:"",displayName:"Modal",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"ModalAction[]"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},draggable:{defaultValue:null,description:"",name:"draggable",required:!1,type:{name:"boolean"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"string | number"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"string | number"}},onCLose:{defaultValue:null,description:"",name:"onCLose",required:!1,type:{name:"(() => void)"}},hideTopButtons:{defaultValue:null,description:"",name:"hideTopButtons",required:!1,type:{name:"boolean"}},noPadding:{defaultValue:null,description:"",name:"noPadding",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Modal/Modal.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"src/components/Modal/Modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}var Container=__webpack_require__("./node_modules/@mui/material/Container/Container.js"),Grid=__webpack_require__("./node_modules/@mui/material/Grid/Grid.js"),FormControl=__webpack_require__("./node_modules/@mui/material/FormControl/FormControl.js"),TextField=__webpack_require__("./node_modules/@mui/material/TextField/TextField.js");const Modal_stories={component:Modal_Modal,argTypes:{children:{type:"symbol",default:"Modal"}}},Primary=(args=>{const modalRef=(0,react.useRef)(null);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Button.Z,{variant:"contained",color:"primary",onClick:()=>{modalRef.current&&modalRef.current.openModal()},children:"Open Modal"}),(0,jsx_runtime.jsx)(Modal_Modal,{ref:modalRef,...args,children:(0,jsx_runtime.jsx)(Container.Z,{children:(0,jsx_runtime.jsx)(Grid.ZP,{container:!0,children:(0,jsx_runtime.jsxs)(Grid.ZP,{item:!0,xs:12,children:[(0,jsx_runtime.jsx)("h1",{children:"Conteudo do modal"}),(0,jsx_runtime.jsx)(FormControl.Z,{children:(0,jsx_runtime.jsx)(TextField.Z,{name:"Nome",placeholder:"Nome"})})]})})})})]})}).bind({});Primary.args={title:"Modal Title",subtitle:"Modal Subtitle",draggable:!1,children:"This is the content of the Modal.",actions:[{label:(0,jsx_runtime.jsx)(Button.Z,{variant:"outlined",children:"Cancelar"}),color:"info",id:1,onClick:()=>{alert("You clicked the close modal button!")}},{label:"Submit",color:"info",id:1,onClick:()=>{alert("You clicked the close modal button!")}}]},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'args => {\n  const modalRef = useRef<ModalHandle>(null);\n  const handleOpen = () => {\n    if (modalRef.current) {\n      modalRef.current.openModal();\n    }\n  };\n  return <>\n      <Button variant="contained" color="primary" onClick={handleOpen}>\n        Open Modal\n      </Button>\n      <Modal ref={modalRef} {...args}>\n        <Container>\n          <Grid container>\n            <Grid item xs={12}>\n              <h1>Conteudo do modal</h1>\n              <FormControl>\n                <TextField name="Nome" placeholder="Nome" /> \n              </FormControl>\n            </Grid>\n          </Grid>\n        </Container>\n      </Modal>\n    </>;\n}',...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]}}]);
//# sourceMappingURL=stories-components-Modal-stories.e105dd3a.iframe.bundle.js.map