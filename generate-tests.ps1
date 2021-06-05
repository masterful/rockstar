$contents = Get-Content .\tic-tac-toe.rock | Out-String

Get-ChildItem -Path .\tests -Filter *.rock.steps -Recurse -File | ForEach-Object {
  $path = $_.FullName.Remove($_.FullName.Length - $_.Extension.Length)
  $contents | Out-File -FilePath $path -Encoding utf8
  Get-Content $_.FullName | Out-File -FilePath $path -Encoding utf8 -Append
}

java -classpath rocky.jar rockstar.Rockstar test tests