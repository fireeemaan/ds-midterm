global.window = {};
const path=require('path');
const dir=path.join(__dirname,'..','assets','js','quiz');
for(let i=1;i<=8;i++) require(path.join(dir,'u'+i+'.js'));
const QZ=global.window.QZ;
Object.keys(QZ).forEach(k=>{
  console.log('=== UNIT '+k+' ===');
  QZ[k].forEach((q,i)=>{
    console.log((i+1)+') '+String(q.o[q.a]).slice(0,95));
  });
});
