function getResult()
{
    let hm,cm,jm,bm,tot,avg,grd;
    hm=+html.value;
    cm=+CSS.value;
    jm=+js.value;
    bm=+bs.value;
    tot=hm+cm+jm+bm;
    avg=tot/4;
    if(hm>39 && cm>39 && jm>39 && bm>39)
    {
        grd=avg>=90? 'A+': avg>=80? 'A': avg>=70? 'B+':  avg>=60? 'B': avg>=50? 'C':'D';

    } else{
        grd='Fail'
    }
    total.value='Total marks :'+tot;
    average.value='average:'+avg;
    grade.value='grade:'+grd;
}