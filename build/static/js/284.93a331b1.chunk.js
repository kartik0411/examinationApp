(self.webpackChunkexaminationApp=self.webpackChunkexaminationApp||[]).push([[284],{4852:function(e,n,t){"use strict";var i=t(5294),l=t(3524),o=i.Z.create({baseURL:l.CT,headers:{"Content-Type":"application/json"}}),s=JSON.parse(localStorage.getItem("token"));o.interceptors.request.use((function(e){return s&&(e.headers.authorization=s),e.headers["Access-Control-Allow-Origin"]="*",e}),(function(e){return Promise.reject(e)})),o.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),n.Z=o},4203:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return P}});var i=t(4165),l=t(5861),o=t(9439),s=t(2791),r=t(6106),c=t(914),d=t(2641),a=t(4925),x=t(7689),u=t(4346),f=(t(2004),t(3524)),h=t(9434),v=t(4852),j=t(1413),m=t(4942),p=t(3251),y=t(5289),g=t(7123),S=t(9157),b=t(5661),z=t(4294),k=t(2456),w=t(1649),Z=t(184);function C(e){var n=e.rows,t=e.columns,i=e.checkboxSelection,l=e.disableSelectionOnClick,o=e.height,s=e.width;return(0,Z.jsx)("div",{style:{height:o,width:s},children:(0,Z.jsx)(w._,{rows:n,height:o,width:s,columns:t,getRowHeight:function(){return"auto"},checkboxSelection:i,disableSelectionOnClick:l,getRowId:function(e){return e._id},hideFooter:!0})})}var A=t(4675),T=t(2775),D=(p.mM.create({page:{flexDirection:"row",backgroundColor:"#E4E4E4"},section:{margin:10,padding:10,flexGrow:1}}),"auto"),L="100%",N=!1,E=!0,F=[{field:"code",headerName:"Code",flex:1},{field:"name",headerName:"Exam Name",flex:2},{field:"detail",headerName:"Detail",flex:5},{field:"score",headerName:"Score",flex:1}];var I=function(e){var n=e.onClose,t=e.selectedValue,r=e.open,c=(0,s.useState)({}),d=(0,o.Z)(c,2),a=d[0],x=d[1],u=(0,s.useState)(!0),f=(0,o.Z)(u,2),h=f[0],w=f[1],I=(0,s.useState)(),P=(0,o.Z)(I,2),R=(P[0],P[1]);console.log("hddsds");var W=function(){R(null),n(t)};(0,s.useEffect)((function(){1==r&&O()}),[r]);var O=function(){var e=(0,l.Z)((0,i.Z)().mark((function e(){var n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t||!t._id){e.next=11;break}if(!t.testid||""==t.testid){e.next=7;break}return e.next=4,v.Z.get("/report/"+t._id+"/"+t.testid);case 4:n=e.sent,e.next=10;break;case 7:return e.next=9,v.Z.get("/report/"+t._id);case 9:n=e.sent;case 10:x(n.data);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=(0,l.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w(!1);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,s.useEffect)((function(){0==h&&(window.print(),setTimeout((function(){console.log("Executed after 1 second")}),1e3),w(!0))}),[h]);var K={yAxis:[{label:"",min:0,max:10}],width:750,height:500,sx:(0,m.Z)({},".".concat(T.x.left," .").concat(T.x.label),{transform:"translate(-20px, 0)"})};return(0,Z.jsx)(Z.Fragment,{children:(null===t||void 0===t?void 0:t._id)&&a&&a.length>0&&(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(y.Z,{fullWidth:!0,maxHeight:"80vh",PaperProps:{style:{minHeight:"80vh"}},maxWidth:"md",onClose:W,open:r,children:[h&&(0,Z.jsx)(b.Z,{children:"Test Report"}),(0,Z.jsx)(S.Z,{children:(0,Z.jsxs)(p.BB,{children:[(0,Z.jsx)(p.T3,{size:[600,11e3],style:{display:"flex",flexDirection:"row"},children:(0,Z.jsxs)("a",{children:[(0,Z.jsxs)("div",{style:{display:"flex"},children:[(0,Z.jsx)("img",{src:"https://www.myndkare.com/wp-content/uploads/2021/05/cropped-myndkare-logo-115x57.png",className:"h-16 mr-3",alt:"Myndkare Logo",style:{height:75,width:150}}),(0,Z.jsx)(p.xv,{style:{fontSize:60,color:"#1adb4e",fontWeight:"bold",marginLeft:102},children:"MYNDKARE"})]}),(0,Z.jsx)("div",{style:{marginLeft:260},children:(0,Z.jsx)(p.xv,{style:{fontSize:17,color:"#000000"},children:"Career Testing and Counselling Services"})}),null==t.testid&&(0,Z.jsx)("div",{style:{marginLeft:292},children:(0,Z.jsxs)(p.xv,{style:{fontSize:12,color:"#000000"},children:["Certification no: ",t._id]})}),(0,Z.jsx)("div",{style:{marginLeft:215,marginTop:20},children:(0,Z.jsx)(p.xv,{style:{fontSize:21,color:"#000000",textDecorationLine:"underline",fontWeight:"bold"},children:"CAREER TESTING AND GUIDANCE REPORT"})}),(0,Z.jsx)("div",{className:"absolute left-1/2 transform -translate-x-1/2",style:{marginLeft:335,marginTop:20},children:(0,Z.jsx)(p.xv,{style:{fontSize:16,color:"#000000",textDecorationLine:"underline"},children:" STUDENT INFORMATION"})}),(0,Z.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,Z.jsxs)("div",{children:[(0,Z.jsx)(p.xv,{style:{fontSize:15,color:"#000000",marginLeft:10},children:"Student Name:"}),(0,Z.jsx)(p.xv,{style:{fontSize:15,color:"#000000",fontWeight:"300",marginLeft:5},children:null===t||void 0===t?void 0:t.name})]}),(0,Z.jsxs)("div",{className:"absolute",style:{left:"65%"},children:[(0,Z.jsx)(p.xv,{style:{fontSize:15,color:"#000000"},children:"Admission No:"}),(0,Z.jsx)(p.xv,{style:{fontSize:15,color:"#000000",fontWeight:"300",marginLeft:5},children:null===t||void 0===t?void 0:t.admsnno})]})]}),(0,Z.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,Z.jsxs)("div",{children:[(0,Z.jsx)(p.xv,{style:{fontSize:15,color:"#000000",marginLeft:10},children:"School:"}),(0,Z.jsx)(p.xv,{style:{fontSize:15,color:"#000000",fontWeight:"300",marginLeft:5},children:null===t||void 0===t?void 0:t.school})]}),(0,Z.jsxs)("div",{className:"absolute",style:{left:"65%"},children:[(0,Z.jsx)(p.xv,{style:{fontSize:15,color:"#000000"},children:"Class:"}),(0,Z.jsx)(p.xv,{style:{fontSize:15,color:"#000000",fontWeight:"300",marginLeft:5},children:null!==t&&void 0!==t&&t.section&&""!==(null===t||void 0===t?void 0:t.section)?(null===t||void 0===t?void 0:t.class)+" - "+(null===t||void 0===t?void 0:t.section):null===t||void 0===t?void 0:t.class})]})]})]})}),(0,Z.jsx)(p.T3,{size:[600,11e3],style:{display:"flex",justifyContent:"center",flexDirection:"column",gap:50,marginTop:20},children:(0,Z.jsxs)("a",{children:[(0,Z.jsx)("hr",{style:{width:"100%",border:"1px solid #000"}}),null===a||void 0===a?void 0:a.map((function(e){var n,t,i,l,o,s,r,c,d,a;return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:20,width:"100%"},children:[1==e.type&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)("div",{style:{textAlign:"center"},children:(0,Z.jsxs)(p.xv,{style:{fontSize:20,color:"#000000",textDecorationLine:"underline"},children:[" ",e.name," (Personality Test)"]})}),(0,Z.jsx)("div",{style:{textAlign:"left",display:"flex",flexDirection:"column",gap:2},children:null===e||void 0===e?void 0:e.examsResults.map((function(e){return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(p.xv,{style:{fontSize:16,color:"#000000",textDecorationLine:"underline"},children:[null===e||void 0===e?void 0:e.name," Personality Type:"]}),(0,Z.jsxs)("p",{style:{fontSize:14,color:"#000000"},children:[" ",e.output]})]})}))})]}),2==e.type&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)("div",{style:{textAlign:"center"},children:(0,Z.jsxs)(p.xv,{style:{fontSize:20,color:"#000000",textDecorationLine:"underline"},children:[" ",e.name," (Aptitude Test)"]})}),(0,Z.jsx)(C,{height:D,width:L,rows:e.dbdaResults,columns:F,checkboxSelection:N,disableSelectionOnClick:E}),(0,Z.jsx)("div",{style:{textAlign:"center"},children:(0,Z.jsx)(p.xv,{style:{fontSize:16,color:"#000000",textDecorationLine:"underline"},children:" APTITUDE PROFILE"})}),(0,Z.jsx)("div",{style:{textAlign:"center"},children:(0,Z.jsx)(A.v,(0,j.Z)({dataset:e.dbdaResults,xAxis:[{scaleType:"band",dataKey:"code",label:"ABILITIES"}],series:[{dataKey:"score",label:e.name+" Scores"}]},K))}),(0,Z.jsxs)("div",{style:{textAlign:"left",display:"flex",flexDirection:"column",gap:2},children:[(0,Z.jsx)(p.xv,{style:{fontSize:16,color:"#000000",textDecorationLine:"underline"},children:" Areas of Proficiency:"}),null===e||void 0===e||null===(n=e.proficiency)||void 0===n?void 0:n.map((function(e){return(0,Z.jsxs)("p",{style:{fontSize:14,color:"#000000"},children:[" ","\u2022",e]})}))]}),(0,Z.jsxs)("div",{style:{textAlign:"left",display:"flex",flexDirection:"column",gap:2},children:[(0,Z.jsx)(p.xv,{style:{fontSize:16,color:"#000000",textDecorationLine:"underline"},children:" Areas of Strength:"}),null===e||void 0===e||null===(t=e.strength)||void 0===t?void 0:t.map((function(e){return(0,Z.jsxs)("p",{style:{fontSize:14,color:"#000000"},children:[" ","\u2022",e]})}))]}),(0,Z.jsxs)("div",{style:{textAlign:"left",display:"flex",flexDirection:"column",gap:2},children:[(0,Z.jsx)(p.xv,{style:{fontSize:16,color:"#000000",textDecorationLine:"underline"},children:" Areas of Improvement:"}),null===e||void 0===e||null===(i=e.improvement)||void 0===i?void 0:i.map((function(e){return(0,Z.jsxs)("p",{style:{fontSize:14,color:"#000000"},children:[" ","\u2022",e]})}))]})]}),3==e.type&&(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)("div",{style:{textAlign:"center"},children:(0,Z.jsxs)(p.xv,{style:{fontSize:20,color:"#000000",textDecorationLine:"underline"},children:[" ",e.name," (Interest Test)"]})})}),4==e.type&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)("div",{style:{textAlign:"center"},children:(0,Z.jsx)(p.xv,{style:{fontSize:20,color:"#000000",textDecorationLine:"underline"},children:" Counsellor Feedback"})}),(0,Z.jsx)("div",{style:{textAlign:"left",display:"flex",flexDirection:"column",gap:2},children:(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(p.xv,{style:{fontSize:15,color:"#000000",fontWeight:"bold"},children:"Academic:"}),(0,Z.jsx)("p",{style:{fontSize:14,color:"#000000"},children:null===e||void 0===e||null===(l=e.feedback)||void 0===l?void 0:l.feedbacks[0]}),(0,Z.jsx)(p.xv,{style:{fontSize:15,color:"#000000",fontWeight:"bold"},children:"Personal Interaction Child:"}),(0,Z.jsx)("p",{style:{fontSize:14,color:"#000000"},children:null===e||void 0===e||null===(o=e.feedback)||void 0===o?void 0:o.feedbacks[1]}),(0,Z.jsx)(p.xv,{style:{fontSize:15,color:"#000000",fontWeight:"bold"},children:"Personal Interactions Parents:"}),(0,Z.jsx)("p",{style:{fontSize:14,color:"#000000"},children:null===e||void 0===e||null===(s=e.feedback)||void 0===s?void 0:s.feedbacks[2]}),(0,Z.jsx)(p.xv,{style:{fontSize:15,color:"#000000",fontWeight:"bold"},children:"Suggested Career or Stream Option-1:"}),(0,Z.jsx)("p",{style:{fontSize:14,color:"#000000"},children:null===e||void 0===e||null===(r=e.feedback)||void 0===r?void 0:r.feedbacks[3]}),(0,Z.jsx)(p.xv,{style:{fontSize:15,color:"#000000",fontWeight:"bold"},children:"Suggested Career or Stream Option-2:"}),(0,Z.jsx)("p",{style:{fontSize:14,color:"#000000"},children:null===e||void 0===e||null===(c=e.feedback)||void 0===c?void 0:c.feedbacks[4]}),(0,Z.jsx)(p.xv,{style:{fontSize:15,color:"#000000",fontWeight:"bold"},children:"Counsellor Remarks:"}),(0,Z.jsx)("p",{style:{fontSize:14,color:"#000000"},children:null===e||void 0===e||null===(d=e.feedback)||void 0===d?void 0:d.feedbacks[5]}),(0,Z.jsx)("wbr",{}),(0,Z.jsx)(p.xv,{style:{fontSize:14,color:"#000000"},children:" Regards,"}),(0,Z.jsx)(p.xv,{style:{fontSize:14,color:"#000000"},children:" For & on behalf of"}),(0,Z.jsx)(p.xv,{style:{fontSize:14,color:"#000000"},children:" MyndKare"}),(0,Z.jsx)("wbr",{}),(0,Z.jsx)("wbr",{}),(0,Z.jsx)("p",{style:{fontSize:14,color:"#000000",fontWeight:"bold"},children:null===e||void 0===e||null===(a=e.feedback)||void 0===a?void 0:a.feedbacks[6]}),(0,Z.jsx)(p.xv,{style:{fontSize:14,color:"#000000"},children:"Clinical Psychologist"})]})})]})]}),(0,Z.jsx)("hr",{style:{width:"100%",border:"1px solid #000"}})]})}))]})})]})}),h&&(0,Z.jsxs)(g.Z,{children:[(0,Z.jsx)(z.Z,{onClick:W,children:"Close"}),(0,Z.jsx)(z.Z,{size:"small",variant:"contained",style:{backgroundColor:"#8F00FF"},startIcon:(0,Z.jsx)(k.Z,{}),onClick:_,children:"Download"})]})]})})})},P=function(){var e=(0,x.s0)(),n=(0,h.I0)(),t=(0,x.TH)().state,j=(0,s.useState)(),m=(0,o.Z)(j,2),p=m[0],y=m[1],g=(0,s.useState)(!1),S=(0,o.Z)(g,2),b=S[0],z=S[1],k=(0,s.useState)({}),w=(0,o.Z)(k,2),C=w[0],A=w[1],T=function(){var e=(0,l.Z)((0,i.Z)().mark((function e(){var n,l;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.Z.get("/getAllTestsExams/"+t._id);case 2:n=e.sent,l=n.data,y(l);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();window.onpopstate=function(){e("/"),window.location.reload()},(0,s.useEffect)((function(){T()}),[]);for(var D=function(){var t=(0,l.Z)((0,i.Z)().mark((function t(l,o){return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{e("/student/exam/"+l,{state:{studentId:o,examId:l}})}catch(i){n({type:f.v,payload:{showToast:!0,message:i,toastType:"error"}})}case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),L=[],N=function(){var n=[];null===p||void 0===p||p.response[E].exams.forEach((function(t){var i="";!0===t.timer&&(i="Time : "+t.duration+" Seconds");var l=new Object;l=!0===t.buttonFlag?(0,Z.jsxs)(r.Z,{children:[(0,Z.jsxs)(c.Z,{md:12,children:[(0,Z.jsx)("h5",{children:t.name}),(0,Z.jsxs)("h6",{children:["Qusetions : ",t.countQuestions]}),(0,Z.jsx)("h6",{children:i})]}),(0,Z.jsx)(c.Z,{md:12,children:(0,Z.jsx)(d.ZP,{className:"bg-success text-light btn-float",size:"large",onClick:function(){return D(t._id,null===p||void 0===p?void 0:p._id)},children:t.buttonText})})]}):(0,Z.jsxs)(r.Z,{children:[(0,Z.jsxs)(c.Z,{md:12,children:[(0,Z.jsx)("h5",{children:t.name}),(0,Z.jsxs)("h6",{children:["Qusetions : ",t.countQuestions]}),(0,Z.jsx)("h6",{children:i})]}),(0,Z.jsx)(c.Z,{md:12,children:(0,Z.jsx)(d.ZP,{className:"text-dark btn-float",size:"large",onClick:function(){return e("/student/exam/23456")},disabled:!0,children:t.buttonText})})]}),n.push(l)}));var t={key:"1",label:null===p||void 0===p?void 0:p.response[E].testName,children:n};L.push(t)},E=0;E<(null===p||void 0===p?void 0:p.response.length);E++)N();return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)("div",{className:"container",children:(0,Z.jsxs)(r.Z,{gutter:16,className:"p-5",children:[L.map((function(e){return(0,Z.jsx)(c.Z,{md:24,className:"m-4",children:(0,Z.jsx)(a.Z,{size:"large",items:[e],defaultActiveKey:[e.key]})})})),(0,Z.jsx)(d.ZP,{className:"mx-5",type:"primary",icon:(0,Z.jsx)(u.Z,{}),size:"large",onClick:function(){return A(t),void z(!0)},disabled:!(null!==p&&void 0!==p&&p.resultPublish),children:"View Report"})]})}),(0,Z.jsx)(I,{selectedValue:C,open:b,onClose:function(e){z(!1)}})]})}},2480:function(){}}]);
//# sourceMappingURL=284.93a331b1.chunk.js.map