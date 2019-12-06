<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Todo React</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- Styles -->
        
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    </head>
    <body>

        <nav class="w-auto bg-blue-800 p-1 mb-5 ">
            <h2 class="text-2xl text-center text-white">Todo React</h2>
        </nav>

        <br>

        <div id="table" class="mb-16"></div>

        <script src="{{ asset('js/app.js') }}"></script>

    </body>
</html>
