<!doctype html><html><head>
	<?php include'imports.php'?>
	<script>
		function createTree(obj,name,destiny)
		{
			//initial conditions
			obj=obj||Global
			name=name||"Global"
			destiny=destiny||document.querySelector('ul#root')

			//empty root ul
			if(name=="Global") destiny.innerHTML=""

			//container <li>
			var li = document.createElement('li')
			destiny.appendChild(li)

			//header
			var label = document.createElement('label')
			li.appendChild(label)
			label.innerHTML=name
			label.classList.add('object')

			//new <ul>
			var ul = document.createElement('ul');
			li.appendChild(ul);

			//click action
			label.onclick=function(){this.classList.toggle('active');ul.classList.toggle('invisible')}

			for(var field in obj)
			{
				//services
				if(typeof(obj[field])=="object")
				{
					createTree(obj[field],field,ul)
				}
				//normal fields inside services
				else
				{
					//new li
					li = document.createElement('li')
					ul.appendChild(li)
					//new label
					label = document.createElement('label')
					li.appendChild(label)
					label.title=translate(field+"_descr")
					label.innerHTML="<b>"+field+"</b>: "
					if(typeof(obj[field])=="function")
					{
						li.innerHTML+=Formulas.prettify(obj[field].toString())
						li.classList.add('function')
					}
					else
						li.innerHTML+=obj[field]
				}
			}
		}

		function init() 
		{ 
			createTree()
			updateResult() 
		} 
	</script>
	<style>
		ul {list-style:circle}
		.function {color:blue}
		.object {color:white;font-size:16px;font-weight:bold;color:#bf5050}
		ul#root li {
			border:1px solid transparent;
			border-radius:0.3em;
			padding:0.1em;
			background:#bce3f8;
			font-family:monospace;
			transition:all 0.2s;
		}
		ul#root li:hover {
			border:1px solid #ccc;
			background:white;
			cursor:default;
		}
	</style>
</head><body onload=init() style=background:#bce3f8>
<!--sidebar--><?php include'sidebar.php'?>
<!--navbar--> <?php include'navbar.php'?>
<div>
	<!--content-->
	<h1>Data structure viewer &mdash; All inputs and equations</h1>
	<!--legend-->
	<div id=legend>
		<span style=color:#666>Legend</span> &rarr;
		<div class=inline style=background:#bf5050></div> Categories
		<div class=inline style=background:black></div>   Inputs
		<div class=inline style=background:blue></div>    Equations
		<style>
			#legend {
				padding:0.5em 4em;
				text-align:center;
			}
			#legend div {
				width:20px;
				height:20px;
				border-radius:0.3em;
			}
		</style>
	</div>
	<!--tree viewer-->
	<ul id=root></ul>
</div>
<!--FOOTER--> <?php include'footer.php'?>
<!--JSON-->   <?php include'currentJSON.php'?>
