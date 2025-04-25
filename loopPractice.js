console.log("printing a right angle triangle");
for( let i=0;i<10;i++)
{
    let line="";
    for( let j=0;j<i;j++)
    {
        line += "$";
    }
    console.log(line);
}

console.log("\n\nprinting a left angle tirangle\n");
for(let i=0;i<10;i++)
{
    let row1="";
    for (let j = 0; j < 10 - i - 1; j++) {
        row1 += " ";
    }
    for( let k=0;k<=i;k++)
    {
                      row1 +="$";

    }
    console.log(row1);

}

console.log("\n\nreversed left angle triangle\n");
 for(let i=0;i<5;i++)
 {
 let row="";
     for(let j=0;j<5-i;j++)
        {
    row+="$";
}
console.log(row);
}

console.log("\ntirangle\n");
for(let i=0;i<5;i++)
{
    let row="";
    for (let j=0;j<5-i-1;j++)
    {
        row +=" "
    }
        for (let k=0;k<=i+i;k++)
        {
            row+="$";
        }
        console.log(row);

}

console.log("\n\nrand\n");
for(let i=0;i<5;i++)
{
    let row="";

for(let j=0;j<=3-i;j++)
{
row+="$";
}
for(let k=0;k<i+i;k++)
{
    row+=" ";
}
for(let l=0;l<=3-i;l++)
{
    row+="$";
}
console.log(row);
}

console.log("reversed triangle");
for(let i=0;i<4;i++)
{
    let row="";
    for(let j=0;j<i;j++)
    {
        row+=" ";
    }
    for(let k=0;k<5-i-i;k++)
    {
        row +="$";
    }
    console.log(row);
}


for(let i=0;i<5;i++)
{    let row="";

    for(let k=0;k<4-i;k++)

{
    row+="  ";
}
for(let j=0;j<3-1;j++)
{
    row+=" #";
}
console.log(row);

}
console.log("printing a square");
for(let i=0;i<5;i++)
{
    let r ="";
for (let j=0;j<5;j++)
 {
    r +="*";

 }
 console.log(r);
}

console.log("printing a mirror triangle");
let s = 0;

for(let i=0;i<5;i++)
{
    let row ="";
    if(i<=2) 
{
    for(let j=0;j<=i;j++){  
        row+="*";
}

}
else
{
    for(let k=0;k<=2-s;k++)
    {
        row += "*";
        s++;


    }
}
console.log(row);
}

console.log("printing reversed mirror triangle");

for (let i = 0; i < 5; i++) {
    let row = "";

    if (i <= 2) {
        let spaces = 2 - i;
        let stars = i + 1;

        row += " ".repeat(spaces);
        row += "*".repeat(stars);
    } else {
        let spaces = i - 2;
        let stars = 5 - i;

        row += " ".repeat(spaces);
        row += "*".repeat(stars);
    }

    console.log(row);
}

console.log("printing diamond");
let s2=0;
let s3=1;
for (let i = 0; i < 5; i++) {
    let row = "";

    if (i <= 2) {
        let spaces = 2 - i;
        let stars = i + 1+s2;

        row += " ".repeat(spaces);
        row += "*".repeat(stars);
        s2++;
       
    } else {
        let spaces = i - 2;
        let stars = 5-i+s3;

        row += " ".repeat(spaces);
        row += "*".repeat(stars);
        s3--;
    }

    console.log(row);
}

console.log("printing a hollow square...");
for (let i = 0; i < 5; i++) {
    let row = "";

    if (i === 0 || i === 4) {
        row = "*".repeat(5);
    } else {
        row = "*" + " ".repeat(3) + "*";
    }

    console.log(row);
}

//End of code































