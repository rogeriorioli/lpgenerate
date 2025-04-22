<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>teste</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', sans-serif;
        }
    </style>
</head>
<body class="bg-gray-50">
    <header class="bg-white shadow-sm">
        <div class="container mx-auto px-4 py-4 flex justify-between items-center">
            <div class="text-2xl font-bold text-[#111827]">teste</div>
            <nav class="hidden md:block">
                <ul class="flex space-x-8">
                    <li><a href="#" class="text-[#111827] hover:text-[#3b82f6]">Início</a></li>
                    <li><a href="#" class="text-[#111827] hover:text-[#3b82f6]">Serviços</a></li>
                    <li><a href="#" class="text-[#111827] hover:text-[#3b82f6]">Sobre</a></li>
                    <li><a href="#" class="text-[#111827] hover:text-[#3b82f6]">Contato</a></li>
                </ul>
            </nav>
            <button class="md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </div>
    </header>

    <section class="hero bg-cover bg-center py-20" style="background-image: linear-gradient(rgba(59, 130, 246, 0.8), rgba(99, 102, 241, 0.8)), url('https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')">
        <div class="container mx-auto px-4 text-center text-white">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">teset de teste</h1>
            <p class="text-xl mb-8 max-w-2xl mx-auto">teset teste teste</p>
            <button class="bg-[#111827] hover:bg-gray-900 text-white font-bold py-3 px-8 rounded-lg transition duration-300">etset</button>
        </div>
    </section>

    <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                    <h2 class="text-3xl font-bold text-[#111827] mb-4">teset</h2>
                    <p class="text-gray-600 mb-6">test etste</p>
                    <button class="bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold py-2 px-6 rounded-lg transition duration-300">teste</button>
                </div>
                <div class="md:w-1/2">
                    <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="cat" class="rounded-lg shadow-lg w-full">
                </div>
            </div>
        </div>
    </section>

    <footer class="bg-[#111827] text-white py-12">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 class="text-xl font-bold mb-4">Contato</h3>
                    <p class="mb-2">teste etstebetste</p>
                    <p class="mb-2">Telefone: 234567890</p>
                    <p>WhatsApp: 1234567890</p>
                </div>
                <div>
                    <h3 class="text-xl font-bold mb-4">Redes sociais</h3>
                    <ul>
                        <li class="mb-2"><a href="#" class="hover:text-[#3b82f6]">LinkedIn: tese</a></li>
                        <li class="mb-2"><a href="#" class="hover:text-[#3b82f6]">Twitter: teste</a></li>
                        <li><a href="#" class="hover:text-[#3b82f6]">Instagram: teste</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-xl font-bold mb-4">Links úteis</h3>
                    <ul>
                        <li class="mb-2"><a href="#" class="hover:text-[#3b82f6]">Política de Privacidade</a></li>
                        <li class="mb-2"><a href="#" class="hover:text-[#3b82f6]">Termos de Serviço</a></li>
                        <li><a href="#" class="hover:text-[#3b82f6]">FAQ</a></li>
                    </ul>
                </div>
            </div>
            <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                <p>&copy; 2023 teste. Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>
</body>
</html>