let time = process.argv.slice(2)
time.sort((a,b) => a-b)
function getNumber (time) {
  let arr = []
  for(let i = 0; i < time.length ; i++){
    if(typeof Number(time[i]) === 'number' && Number(time[i]) >=0){
      arr.push(time[i])
    }
  }
  return arr
}
let realNumber = getNumber(time)


realNumber.sort((a,b) => a-b)
for(let i = 0; i < realNumber.length; i++){
    setTimeout(()=>{
      console.log("* "+ realNumber[i] + " seconds")
      process.stdout.write('\x07');
    }, Number(realNumber[i])*1000)
  }
 
  
