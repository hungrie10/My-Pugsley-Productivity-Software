git remote add origin https://github.com/hungrie10/My-Pugsley-Productivity-Software.git
git branch -M main
git push -u origin main


while($true){
    git add .

    $status = git status --porcelain

    if($status){
        git commit -m "Say Goodbye to Unfulfilled Dreams and Welcome a New Era of Productivity with Pugsley: Your Ultimate Task Management Companion!"
        git push
    }

    Start-Sleep -Seconds 150

}