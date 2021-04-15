document.addEventListener('DOMContentLoaded', function()
{
    let Try = document.querySelector('h1');
    Try.addEventListener('mouseover', function()
    {
        Try.style.border = '4px solid #333';
    })
    Try.addEventListener('mouseout', function()
    {
        Try.style.border = '';
    });
})