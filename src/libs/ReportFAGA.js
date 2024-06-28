import db_suiche from "./Conection.js";

export async function ReportFAGA() {
    return await db_suiche.query (`

        select 	"NVA_CTA_CTO", 
	        	'' "INT_COMER",
    	    	CASE 
		        	WHEN substr(rc.contract_code,1,1)!='1' THEN 'NO TIENE'::character varying
	    		    WHEN rc.contract_code is null THEN 'NO TIENE'::character varying
        			ELSE rc.contract_code
	    	    END AS "CTA_CTO", 
	        	'' "CONTRATO",
    		    '' "PTO_SUMIN",
    		    "DOC_CONTABLE", 
	        	p.date "FEC_CON_COBRO", 
    	    	'' "CLASE_DOC",
		        '' "PAGO_PAR",
    	    	"MES_FACT",
        		"ANO_FACT",
		        "F_INI_INT_FACT",
	    	    "F_FIN_INT_FACT",
        		"NRO_CONTROL", 
	    	    "DOC_IMPRESION",
	        	"FEC_IMPRE",
    		    "NOMBRE_DEL_CLIENTE",
    		    "CEDULA_RIF",
	        	'' "CNAE", 
    	    	'' "OPE_PPAL", 
		        '' "OPE_SECU", 
    	    	"SERVICIO", 
        		"TARIFA", 
		        CASE
                    WHEN "MONTO_RELLENO"!='0' THEN "MONTO_RELLENO"
                    ELSE "MONTO_ASEO" 
            	END AS "MONTO",
	    	    CASE
                    WHEN "MONTO_IVA_RELLENO"!='0' THEN "MONTO_IVA_RELLENO"
                    ELSE "MONTO_IVA_ASEO" 
        	    END AS "MONTO_IVA",
	        	"RIF_OPERADORA",
    	    	"NOMBRE_OPERADORA",
		        "ESTADO",
    	    	"MUNICIPIO", 
        		"PARROQUIA",
	        	ds.description "ESTATUS_FACTURA",
	    	    d.updated_at::DATE "FECHA_ANULACION"
        from audit.odoo o
	        INNER JOIN main.debts d ON d.invoice_number=o."DOC_CONTABLE"
            LEFT JOIN main.contracts rc ON d.contract_id = rc.id
            LEFT JOIN main.payments p ON p.debt_id = d.id
	        LEFT JOIN parameters.debt_status ds on d.debt_status_id=ds.id
	        where ("MONTO_RELLENO"!='0' OR "MONTO_ASEO"!='0') AND d.debt_status_id=4 and d.updated_at::DATE < NOW()::DATE - INTERVAL  '1 DAY'
    	    and p.id is null 
	`) 
    .then( result => { 
        return result[0]})
};
