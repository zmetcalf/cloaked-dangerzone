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
	echo "before load";
	$xmlLoad = simplexml_load_file($xml);	
	echo "after load " . $xmlLoad->getName();
	foreach($xmlLoad->children() as $x) {
		echo " " . $x->attributes() . " "; //prints the ID
	}	
	foreach($_POST as $i) {
		echo " " . $i . " ";
	}	
	//loadFile($xml, "tool_updated.xsl");
}

if($_POST["btn_sub"] == "") {
	loadFile("tool.xml", "tool.xsl");
}
else {
	updateFile("tool.xml");
}

?>
