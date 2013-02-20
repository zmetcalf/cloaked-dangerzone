<?php
//Modified ASP code from http://www.w3schools.com/xsl/xsl_server.asp
//sudo apt-get install php5-xsl
//XSL is not default on ubuntu PHP
$xmlDoc = new DOMDocument();
$xmlDoc->load("cdcatalog.xml");

$xsltTemp = new DOMDocument();
$xsltTemp->load("cdcatalog.xsl");

$proc = new XSLTProcessor();
$proc->importStyleSheet($xsltTemp);

echo $proc->transformToXML($xmlDoc);
?>
