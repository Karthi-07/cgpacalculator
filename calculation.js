function submit()
{
    var count=0,flag=0;
    let no=document.getElementById("noofsem").value;
    if(no=="") 
        alert("Fill the No of Semester");
    else if(no>='a' && no<='z' || no>='A' && no<='Z')
    {
        document.getElementById("noofsem").value="";
        alert("Semester Is contain only number");
    }
    else
    {
        document.getElementById("noofsem").value="";
        var a = document.getElementsByClassName("input-box");
        a[0].style.display="none";    
        for(let l=1;l<=no;l++)
        {
          count++;
          flag=1;
          var nsem=document.getElementById("nsem");
          nsem.innerHTML+=`<div class=left>
           <p>Enter no of Subjects in ${count} Semester :- </p> 
           <input type=text style=width:2vw; id=semsub required>
           <input type=button onclick="semonclick(this)" id=sembut class=but1 value=submit>
           </div>`;
        }
       if(flag==1)
       {
           var fin = document.getElementById("ans");
           fin.innerHTML+=`<p style=text-align:center;>
                        <input type=button onclick=cgpa() value=CGPA id=finans></p>`;
       }
    }
}

function semonclick(target)
{
     
     var no = target.parentElement.children[1].value;
     console.log(no);
     target.parentElement.children[2].disabled="true";
     var c = document.getElementById("semtable");
     var string =`
     <br><br>
     <div>
     <table border=1px;>
     <thead>
     <tr>
     <th>S.NO</th>
     <th>Subject</th>
     <th>Credit</th>
     <th>Grade</th>
     </tr>
     </thead>`;
     for(let i=1;i<=no;i++)
     { 
         var temp=`<tr>
                      <td>${i}</td>
                      <td>Subject-${i}</td>
                      <td><input type=text maxlength=2 class=credit style=width:4vw; required></td>
                      <td>
                      <select name=grade class=semgrade>
                      <option value=O>O</option>
                      <option value=A+>A+</option>
                      <option value=A>A</option>
                      <option value=B+>B+</option>
                      <option value=B>B</option>
                      </select>
                      </td>
                      </tr>`;
            string+=temp;
     }  
     c.innerHTML+=string+`</table><br><br><p style=text-align:center;>
     <input type=button value=Calculate onclick=gpacal(this) class=but1 name=gpa></p></div>`;
}


var credit_arr = [];
var grade_arr= [];

function gpacal(target)
{
    var cred_arr = document.querySelectorAll(".credit");
    var grad_arr = document.querySelectorAll(".semgrade");
    for(let i=0;i<cred_arr.length;i++)
    {
        credit_arr.push(cred_arr[i].value);
        grade_arr.push(grad_arr[i].value);
        console.log(cred_arr[i].value+" "+grad_arr[i].value);
    }
    target.parentElement.parentElement.innerHTML="";
}

function cgpa()
{
    var fin_cred = 0;
    var cred_grade=0;
    var final = document.getElementById("ans");
    final.innerHTML+="<h2 style=text-align:center;>Your CGPA is <h2>";
    for(let i=0;i<credit_arr.length;i++)
    {
        fin_cred+=parseFloat(credit_arr[i]);
        cred_grade+=parseFloat(credit_arr[i])*grade(grade_arr[i]);
        console.log(cred_grade);
    }
    final.innerHTML+=`<h2 style=text-align:center;>${(cred_grade/fin_cred).toFixed(2)}</h2>`
}
function grade(fin_grade)
{
   var g=0;
   switch(fin_grade)
   {
    case 'O':
        g=10;
        break;
    case 'A+':
         g=9;
         break;
    case 'A':
         g=8;
         break;
    case 'B+':
         g=7;
         break;
    case 'B':
        g=6;
        break;
   }
 return g;
}
