$(document).ready(function(){
	console.log("ready");
	$('#user').append('<div class ="conatiner clearfix">');
	$.ajax({
		url:'https://randomuser.me/api/',
		data:{results:50},
		dataType:'json',
		success: 
		function(data){
			console.log("hello");
			var arr = [2, 2, 2];
			var personas = data;
			 for(var i =0 ;i<personas.results.length; i++)
			 {
			 	console.log('i= '+i);
			 	//imageCall
			 	var imageTag =$('<img>');
			 	imageTag.prop('src',personas.results[i].picture.thumbnail);
			 	console.log(personas.results[i].email);
			 	//console.log('ImageScr= '+imageTag);
			 	//$('#user').append(personas.results[i].picture.thumbnail);
			 	$('#user').prepend(`
			 		<div class = row>
			 		<div class ="col-sm-3">
						<h4>我是第${i+1}位使用者</h4>
					</div>
			 		<div class ="col-sm-3">
						<img src =${personas.results[i].picture.thumbnail}>
					</div>
					<div class ="col-sm-3">
						<p>我的名字是:${personas.results[i].name.title+'_'+personas.results[i].name.first+'_'+personas.results[i].name.last}</p>
					</div>
					<div class ="col-sm-3">
						<p>我的mail:<a href="${personas.results[i].email}">${personas.results[i].email}</a></p>
					</div>
			 		</div>`);
			 	
			 	
			 }


						}//sucess



			})//ajax
	
	//$('#user').children().append(imageTag);

});//document.ready
	

