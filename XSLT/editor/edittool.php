<?php

function loadFile($xml, $xsl) {
	$xmlDoc = new DOMDocument();
	$xmlDoc->load($xml);

	$xslDoc = new DOMDocument();
	$xslDoc->load($xsl);

	$proc = new XSLTProcessor();
	$proc->importStyleSheet($xslDoc);

	echo $proc->transformToXML($xmlDoc);
}

function updateFile($xml) {
	
	$xmlDoc = new DOMDocument();
	$xmlDoc->load($xml);
	$xmlLoad = simplexml_load_file($xml);
	$postKeys = array_keys($_POST);
	
	echo "after load " . $xmlLoad->getName();
	foreach($xmlLoad->children() as $x) {		
		foreach($_POST as $key=>$value) {		
			if($key == $x->attributes()) {	
				echo " " . "Made it the loop" . " ";				
				$x->value = $value;
				//$xmlLoad->children()->children() = $value;
				//echo " 1 " . $x->attributes() . " 1 "; //prints the ID
			}
		}
	}	
	$xmlLoad->asXML($xml);
/*	foreach($_POST as $key=>$value) {
		echo " 2  " . "$key" . " 2 ";
	}	*/ //I do not like this way
	
	/*foreach($postKeys as $i) {
		echo " 3 " . $i . " 3 ";
	}*/
}

if($_POST["btn_sub"] == "") {
	loadFile("tool.xml", "tool.xsl");
}
else {
	updateFile("tool.xml");
}

?>
