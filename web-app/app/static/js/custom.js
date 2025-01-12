function showMore(id){
    document.getElementById(id+'Overflow').className='';
    document.getElementById(id+'MoreLink').className='hidden';
    document.getElementById(id+'LessLink').className='';
}

function showLess(id){
    document.getElementById(id+'Overflow').className='hidden';
    document.getElementById(id+'MoreLink').className='';
    document.getElementById(id+'LessLink').className='hidden';
}

var len = 100;
var shrinkables = document.getElementsByClassName('shrinkable');
if (shrinkables.length > 0) {
    for (var i = 0; i < shrinkables.length; i++){
        var fullText = shrinkables[i].innerHTML;
        if(fullText.length > len){
            var trunc = fullText.substring(0, len).replace(/\w+$/, '');
            var remainder = "";
            var id = shrinkables[i].id;
            remainder = fullText.substring(len, fullText.length);
            shrinkables[i].innerHTML = '<span>' + trunc + '<span class="hidden" id="' + id + 'Overflow">'+ remainder +'</span></span>&nbsp;<a id="' + id + 'MoreLink" href="#!" onclick="showMore(\''+ id + '\');">More</a><a class="hidden" href="#!" id="' + id + 'LessLink" onclick="showLess(\''+ id + '\');">Less</a>';
        }
    }
}


function openForm() {
    document.getElementById("myForm").style.display = "block";
    document.getElementById('backgrInfo').style.display='block';
  }

function closeForm() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById('backgrInfo').style.display='none'
}

function submitForm() {
    $.ajax({
      data : {
        title : $('#title').val(),
        abstract : $('#abstract').val(),
      },
      type : 'POST',
      url : window.location.pathname + '/edit',
      success: function(){
        alert("Edited film information");}
    })
}
