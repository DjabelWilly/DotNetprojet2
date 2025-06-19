// Write your JavaScript code.

function redirectAfterTimeout(url, delay)
{
    setTimeout(function () {
        window.location.href = url;
    }, delay);
}
