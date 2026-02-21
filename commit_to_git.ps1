# Run once (only if origin is not already added)
git remote add origin https://github.com/hungrie10/My-Pugsley-Productivity-Software.git 2>$null
git branch -M main

while ($true) {
    
    git add .

    # Check if there are changes staged or unstaged
    $status = git status --porcelain

    if ($status) {
        git commit -m "Auto commit: update project"
        git push -u origin main
        Write-Host "Changes committed and pushed at $(Get-Date)"
    }
    else {
        Write-Host "No changes at $(Get-Date)"
    }

    Start-Sleep -Seconds 150
}