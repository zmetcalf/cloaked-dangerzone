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

	$xmlLoad = new simplexml_load_file($xml);	

	//foreach($xmlLoad as $x) {
		//echo $x['id'];
		//$result = $xmlLoad->xpath($i);
		
	//}		
	//loadFile($xml, "tool_updated.xsl");
}

if($_POST["btn_sub"] == "") {
	loadFile("tool.xml", "tool.xsl");
}
else {
	updateFile("tool.xml");
}

?>
