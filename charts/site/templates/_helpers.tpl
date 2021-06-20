{{- define "dbConnectionStringEnc" }}
{{- printf "Host=%s-psql;Port=5432;Database=%s;Username=%s;Password=%s;Tcp Keepalive=true;Timeout=300;CommandTimeout=300;" .Values.namePrefix .Values.sqlDb.name .Values.sqlDb.user .Values.sqlDb.password | b64enc }}
{{- end }}
{{- define "dbHost" }}
{{- printf "%s-psql" .Values.namePrefix }}
{{- end }}
{{- define "dbNameEnc" }}
{{- printf "%s" .Values.sqlDb.name | b64enc }}
{{- end }}
{{- define "dbUserEnc" }}
{{- printf "%s" .Values.sqlDb.user | b64enc }}
{{- end }}
{{- define "dbPasswordEnc" }}
{{- printf "%s" .Values.sqlDb.password | b64enc }}
{{- end }}
{{- define "imagePullSecret" }}
{{- printf "{\"auths\": {\"%s\": {\"username\":\"%s\",\"password\":\"%s\",\"email\":\"%s\"}}}" .Values.image.registry .Values.image.username .Values.image.password .Values.image.email | b64enc }}
{{- end }}
{{- define "webHost" }}
{{- printf "%s-webhost" .Values.namePrefix }}
{{- end }}
