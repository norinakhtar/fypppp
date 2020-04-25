document.getElementById("contnr").innerHTML=

'<div class="row flex-row">'+
'<div class="col-md-6 d-flex align-items-stretch grid-margin">'+
'<div class="col-12">'+
'<div class="card">'+
'<div class="card-body">'+
'<h4 class="card-title">Branch Setup</h4>'+
'<hr class="style1" style="	border-top: 1px solid blueviolet">'+
'<form class="forms-sample">'+
'<div class="form-group">'+
'<label for="exampleInputEmail1">Branch id</label>'+
'<input type="text" class="form-control" id="txtbranchid" placeholder="1" disabled >'+
'</div>'+
'<div class="form-group">'+
'<label for="exampleInputPassword1">Branch Description</label>'+
'<input type="text" class="form-control"   id="txtbranchdesc" placeholder="Branch Description"> <span id="alrt" style="color:red;font-size:15px"> <span>   '+
'</div>'+
'<button type="button" onclick="add()"   class="btn btn-success mr-2">ADD</button>'+
'</form>'+
'</div>'+
'</div>'+
'</div>'+
'</div>      <!-- co ends -->'+
'</div>      <!-- row ends -->'+

'<div class="row" style="padding: 0; margin: 0;">'+
'<div class="col-lg-12 grid-margin stretch-card">'+
'<div class="card">'+
'<div class="card-body">'+
'<table  id="grdservice" class="table" style="width: 60%; border: 1px solid gray ; border-collapse: collapse;">'+
'<thead>'+
'<tr>'+
'<th style="width: 60%; border: 1px solid gray ; border-collapse: collapse"> Branch id</th >'+
'<th style="width: 60%; border: 1px solid gray ; border-collapse: collapse">branch Description</th>'+
'<th style="width: 60%; border: 1px solid gray ; border-collapse: collapse">isactive</th>'+
'<th style="width: 60%; border: 1px solid gray ; border-collapse: collapse">Options</th>'+
'</tr>'+
'</thead>'+
'<tbody id="grdrow">'+

'</tbody>'+
'</table>'+
'</div>'+
'</div>'+
'</div>'+


'</div>' 
