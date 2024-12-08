"use strict";(self.webpackChunkexaminationApp=self.webpackChunkexaminationApp||[]).push([[15],{4852:function(e,t,n){var s=n(5294),a=n(3524),r=s.Z.create({baseURL:a.CT,headers:{"Content-Type":"application/json"}}),i=JSON.parse(localStorage.getItem("token"));r.interceptors.request.use((function(e){return i&&(e.headers.authorization=i),e.headers["Access-Control-Allow-Origin"]="*",e}),(function(e){return Promise.reject(e)})),r.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),t.Z=r},5015:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var s=n(4165),a=n(5861),r=n(9439),i=n(1429),d=n(6106),o=n(914),u=n(7647),l=n(5140),c=n(4424),p=n(2641),m=n(2791),h=n(7689),x=n(184),v=n(4852),f=n(9434);var Z=function(){i.Z.Countdown;var e=(0,h.s0)(),t=((0,f.I0)(),(0,m.useState)()),n=(0,r.Z)(t,2),Z=n[0],j=n[1],g=(0,m.useState)([]),I=(0,r.Z)(g,2),w=I[0],b=I[1],N=(0,m.useState)(!1),S=(0,r.Z)(N,2),q=S[0],y=S[1],k=(0,m.useState)(!1),C=(0,r.Z)(k,2),T=C[0],A=C[1],P=(0,m.useState)(),E=(0,r.Z)(P,2),O=E[0],_=E[1],F=(0,m.useState)(-1),D=(0,r.Z)(F,2),J=D[0],L=D[1],M=(0,h.TH)().state,z=(0,m.useState)(!1),B=(0,r.Z)(z,2),G=B[0],H=B[1],Q=(0,m.useState)(new Map),R=(0,r.Z)(Q,2),U=R[0],V=R[1],K=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(){var t,n,a,r,i,d,o,u,l;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.Z.get("/questionsForExam/"+M.studentId+"/"+M.examId);case 2:return t=e.sent,n=t.data,a={studentId:M.studentId,examId:M.examId},e.next=7,v.Z.put("/editStartTimestamp",a);case 7:for(r=e.sent,null!==n&&void 0!==n&&n.dbdaId&&""!=(null===n||void 0===n?void 0:n.dbdaId)&&H(!0),null!==n&&void 0!==n&&n.timer&&(null!=r.data.startTime?(i=Date.parse(r.data.startTime),d=(null===n||void 0===n?void 0:n.duration)-(Date.now()-i)/1e3,L(d>0?parseInt(d):0)):L(parseInt(null===n||void 0===n?void 0:n.duration))),o=[],u=new Map,l=0;l<(null===n||void 0===n?void 0:n.questions.length);l++)n.questions[l].optionSelected&&0!=n.questions[l].optionSelected?u.set(l+1,!0):u.set(l+1,!1),o.push(n.questions[l].optionSelected);V(u),_(null===n||void 0===n?void 0:n.answeredques),b(o),console.log("aagya daTA VBC"+JSON.stringify(n)),j(n),null!==n&&void 0!==n&&n.dbdaId&&""!=(null===n||void 0===n?void 0:n.dbdaId)||(null===n||void 0===n?void 0:n.answeredques)===(null===n||void 0===n?void 0:n.questions.length)?A(!0):A(!1);case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,m.useEffect)((function(){0==J?y(!1):J>0?(setTimeout((function(){L(J-1)}),1e3),y(!0)):y(!0)}),[J]),(0,m.useEffect)((function(){K()}),[]),(0,m.useEffect)((function(){G||O===(null===Z||void 0===Z?void 0:Z.questions.length)?A(!0):A(!1)}),[O]);var W=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(t,n,a){var r,i,d;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={studentId:M.studentId,examId:M.examId,questionId:n,option:t.target.value},e.next=3,v.Z.post("/liveresponse",r);case 3:0==w[a]&&_(O+1),i=[],Object.assign(i,w),i[a]=t.target.value,b(i),(d=U).set(a+1,!0),V(d);case 11:case"end":return e.stop()}}),e)})));return function(t,n,s){return e.apply(this,arguments)}}(),X=function(){var t=(0,a.Z)((0,s.Z)().mark((function t(){var n,a;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={studentId:M.studentId,examId:M.examId},t.next=3,v.Z.post("/submitExam",n);case 3:return t.next=5,v.Z.get("/students/"+M.studentId);case 5:a=t.sent,e("/student/exam/preview",{state:null===a||void 0===a?void 0:a.data});case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(d.Z,{gutter:16,className:"h-100",children:[(0,x.jsx)(o.Z,{md:16,className:"p-3",children:(0,x.jsxs)(u.Z,{className:"h-100",children:[(0,x.jsx)("h3",{className:"font-weight-bold text-center",children:"Questions"}),(0,x.jsx)("hr",{}),Z&&(null===Z||void 0===Z?void 0:Z.questions.map((function(e,t){return(0,x.jsxs)(l.Z.Item,{children:[e.images&&e.images.length>0?(0,x.jsxs)("div",{children:[(0,x.jsxs)("p",{className:"pt-4 px-4",children:[t+1,"."]}),(0,x.jsx)("p",{className:"pt-4 px-4",children:e.images.map((function(e,t){return(0,x.jsx)("img",{src:e,loading:"eager"})}))}),(0,x.jsx)("p",{className:"pt-4 px-4",children:e.name})]}):(0,x.jsxs)("p",{className:"pt-4 px-4",children:[t+1,". ",e.name]}),(0,x.jsx)(c.ZP.Group,{name:"radiogroup",className:"p-2 px-5",onChange:function(n){return W(n,e._id,t)},value:w[t],children:e.options.map((function(e,t){return(0,x.jsx)(c.ZP,{value:t+1,name:"radio1",className:"my-3",disabled:!q,children:(0,x.jsx)("div",{value:t+1,className:"p-2 px-5",children:(0,x.jsx)("p",{children:t+1+". "+e},e)})},e)}))}),(0,x.jsx)("hr",{})]},e._id)})))]})}),(0,x.jsx)(o.Z,{md:8,className:"p-3",children:(0,x.jsx)(u.Z,{style:{position:"fixed",marginTop:"0"},children:(0,x.jsxs)(d.Z,{gutter:24,className:"h-100",children:[(0,x.jsxs)(o.Z,{md:24,children:[(0,x.jsx)("h3",{className:"font-weight-bold",children:null===Z||void 0===Z?void 0:Z.name}),(0,x.jsx)("hr",{})]}),(0,x.jsx)(o.Z,{md:24,children:J>=0&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("h4",{className:"font-weight-bold",children:["Time Left : ",(0,x.jsx)("span",{style:{color:"red"},children:J})," Seconds"]}),(0,x.jsx)("hr",{})]})}),(0,x.jsx)(o.Z,{md:24,children:(0,x.jsx)("h5",{className:"font-weight-bold",children:"Answer Status"})}),Z&&(null===Z||void 0===Z?void 0:Z.questions.map((function(e,t){return(0,x.jsx)(o.Z,{md:3,className:"p-2",children:(0,x.jsx)(p.ZP,{shape:"circle",value:t+1,onClick:function(e){e.target.value},style:U.has(t+1)&&1==U.get(t+1)&&{backgroundColor:"green",color:"white"},children:t+1})},e._id)})))]})})})]}),(0,x.jsx)("div",{className:"submit_btn",children:(0,x.jsx)(p.ZP,{type:"primary",htmlType:"submit",onClick:function(){return X()},disabled:!T,children:"Submit"})})]})}}}]);
//# sourceMappingURL=15.c5d31aa0.chunk.js.map