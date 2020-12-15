gwip() {
        git add -A; git commit -m "GREEN - $1 - to squash"
}
rwip() {
        git add -A; git commit -m "RED - $1 - to squash"
}
fwip() {
        git add -A; git commit -m "REFACTOR - $1 - to squash"
}
