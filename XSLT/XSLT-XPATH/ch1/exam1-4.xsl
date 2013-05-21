<?xml version="1.0"?>
<xsl:stylesheet
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	version="2.0">
	<xsl:output method="html" />
	<xsl:template match="year">
		<ul>
			<xsl:apply-templates />
		</ul>
	</xsl:template>
	<xsl:template match="month">
		<li>
			<xsl:apply-templates />
		</li>
	</xsl:template>
</xsl:stylesheet>