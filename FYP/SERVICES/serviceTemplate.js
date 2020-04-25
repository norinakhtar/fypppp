document.getElementById("contnr").innerHTML=

'<div class="row flex-row">'+
'<div class="col-md-6 d-flex align-items-stretch grid-margin">'+
'<div class="col-12">'+
'<div class="card">'+
'<div class="card-body">'+
'<h4 class="card-title">Services Setup</h4>'+
'<hr class="style1" style="	border-top: 1px solid blueviolet">'+
'<form class="forms-sample">'+
'<div class="form-group">'+
'<label for="exampleInputEmail1">Service id</label>'+
'<input type="text" class="form-control" id="txtserviceid" placeholder="" disabled >'+
'</div>'+
'<div class="form-group">'+
'<label for="exampleInputPassword1">Service Description</label>'+
'<input type="text" class="form-control"   id="txtservicedesc" placeholder="Service Description"> <span id="alrt" style="color:red;font-size:15px"> <span>   '+
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
'<table  id="grdservice" class="table" style="width: 60%; border: 1px solid blueviolet ; border-collapse: collapse;">'+
'<thead>'+
'<tr>'+
'<th style="width: 60%; border: 1px solid blueviolet ; border-collapse: collapse"> Service id</th >'+
'<th style="width: 60%; border: 1px solid blueviolet ; border-collapse: collapse">service Description</th>'+
'<th style="width: 60%; border: 1px solid blueviolet ; border-collapse: collapse">isactive</th>'+
'<th style="width: 60%; border: 1px solid blueviolet ; border-collapse: collapse">Options</th>'+
'</tr>'+
'</thead>'+
'<tbody id="grdrow">'+

'</tbody>'+
'</table>'+
'</div>'+
'</div>'+
'</div>'+


'</div>' 
