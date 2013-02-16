<?php
echo "top of the page";
$xmlDoc = new DOMDocument();
$xmlDoc->load("cdcatalog.xml");

$xsltTemp = new DOMDocument();
$xsltTemp->load("cdcatalog.xsl");

$proc = new XSLTProcessor;
$proc->importStyleSheet($xsltTemp);

//someone's try at this
$xp = new XsltProcessor();
$xp->importStylesheet($xsltTemp);
$xp->transformToXML($xmlDoc);

//echo $proc->transformToXML($xmlDoc);
echo "not really working";



?>
