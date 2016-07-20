var notes=[],
	$addNote=$('.header'),
	addNoteForm=$addNote.find('.header-form'),
	$notes=$('.note-container'),
	noteTitle=addNoteForm.find('input[name="note_title"]'),
	noteContent=addNoteForm.find('textarea[name="note_content"]');

var cnt=0;
function appendSingleNote(data){
	var content=data.content,title=data.title,count=data.id;
	 var html = '<div class="note" id="' + count + '">' +
                    '<p class="note-title">' +
                    '<button onclick="removeNote(' + count + ')" color:black; height: 20px; width: 20px"> </button>' + 
                    title + 
                    '</p>' +
                    '<p class="note-content">' +
                        content + 
                    '</p>' + 
                '</div>';
	$notes.append(html);
	cnt++;
}

function storeNote(data){
	notes.push(data);
	window.localStorage.setItem('notes',JSON.stringify(notes));
	appendSingleNote(data);
}


function init(){
	console.log("rerere");
	if(!!window.localStorage.getItem('notes')){

		notes=JSON.parse(window.localStorage.getItem('notes'));
	}
	else{

		alert('null');
		notes=[];
	}

	var i;
	for (i=0;i<notes.length;i++)
	{
		console.log("ereree");
		appendSingleNote(notes[i]);
	}
}
init();

addNoteForm.on('submit',function(e){
	e.preventDefault();
	// alert("click");
	var data= {title:noteTitle.val(),
		content:noteContent.val(),id:cnt};
	console.log(data);
	storeNote(data);
})


function removeNote(id) {
	console.log(id);

    notes = notes.filter(function(e) {
        return e.id !== id;
    });
    window.localStorage.setItem('notes', JSON.stringify(notes));
    
    var parent = document.getElementById('notes_all');
    var child = document.getElementById(id);
    parent.removeChild(child);
}