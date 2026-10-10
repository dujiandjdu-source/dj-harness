$ErrorActionPreference = 'Stop'

$repo = Split-Path -Parent $MyInvocation.MyCommand.Path
$env:DSH_HOME = Join-Path $repo '.dsh-home'

Write-Host "Starting Personal Game Development Harness"
Write-Host "DSH_HOME: $env:DSH_HOME"
Write-Host "Project skills: $(Join-Path $repo '.dsh\skills')"

Push-Location $repo
try {
    pnpm dsh web --no-open
} finally {
    Pop-Location
}
