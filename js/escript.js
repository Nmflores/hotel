angular.module('ux', []);
angular.module('ux').controller('uxCtrl', ($scope) => {
    $scope.titulo = "Eagle Hotel";
    $scope.subtitulo = "Welcome!";

    $scope.apartamentos = [
        {numero: 1, tipo: 'Presidential', status: 'Occupied'},
        {numero: 2, tipo: 'Single', status: 'Unoccupied'},
        {numero: 3, tipo: 'Single', status: 'Maintenance'},
        {numero: 4, tipo: 'Double', status: 'Unoccupied'},
        {numero: 5, tipo: 'Double', status: 'Maintenance'},
        {numero: 6, tipo: 'Luxe', status: 'Unoccupied'},
        {numero: 7, tipo: 'Master', status: 'Occupied'},
        {numero: 8, tipo: 'Single', status: 'Maintenance'},
        {numero: 9, tipo: 'Single', status: 'Occupied'},
        {numero: 10, tipo: 'Double', status: 'Unoccupied'},
        {numero: 11, tipo: 'Double', status: 'Occupied'},
        {numero: 12, tipo: 'Luxe', status: 'Unoccupied'},
        {numero: 13, tipo: 'Master', status: 'Maintenance'},
        {numero: 14, tipo: 'Single', status: 'Unoccupied'},
        {numero: 15, tipo: 'Single', status: 'Occupied'},
        {numero: 16, tipo: 'Double', status: 'Unoccupied'},
        {numero: 17, tipo: 'Double', status: 'Occupied'},
        {numero: 18, tipo: 'Luxe', status: 'Unoccupied'},
        {numero: 19, tipo: 'Master', status: 'Maintenance'},
        {numero: 20, tipo: 'Single', status: 'Unoccupied'},
        {numero: 21, tipo: 'Single', status: 'Occupied'},
        {numero: 22, tipo: 'Double', status: 'Maintenance'},
        {numero: 23, tipo: 'Double', status: 'Occupied'},
        {numero: 24, tipo: 'Luxe', status: 'Unoccupied'},
        {numero: 25, tipo: 'Master', status: 'Occupied'},
        {numero: 26, tipo: 'Single', status: 'Maintenance'},
        {numero: 27, tipo: 'Single', status: 'Occupied'},
        {numero: 28, tipo: 'Double', status: 'Unoccupied'},
        {numero: 29, tipo: 'Double', status: 'Occupied'},
        {numero: 30, tipo: 'Luxe', status: 'Maintenance'},
        {numero: 31, tipo: 'Master', status: 'Occupied'},
        {numero: 32, tipo: 'Single', status: 'Unoccupied'},
        {numero: 33, tipo: 'Single', status: 'Occupied'},
        {numero: 34, tipo: 'Double', status: 'Maintenance'},
        {numero: 35, tipo: 'Double', status: 'Occupied'},
        {numero: 36, tipo: 'Luxe', status: 'Unoccupied'},
        {numero: 37, tipo: 'Master', status: 'Occupied'},
        {numero: 38, tipo: 'Single', status: 'Unoccupied'},
        {numero: 39, tipo: 'Single', status: 'Maintenance'},
        {numero: 40, tipo: 'Double', status: 'Unoccupied'},
        {numero: 41, tipo: 'Double', status: 'Maintenance'},
        {numero: 42, tipo: 'Luxe', status: 'Unoccupied'},
        {numero: 43, tipo: 'Master', status: 'Occupied'},
        {numero: 44, tipo: 'Single', status: 'Unoccupied'},
        {numero: 45, tipo: 'Single', status: 'Occupied'},
        {numero: 46, tipo: 'Double', status: 'Unoccupied'},
        {numero: 47, tipo: 'Double', status: 'Maintenance'},
        {numero: 48, tipo: 'Luxe', status: 'Occupied'},
        {numero: 49, tipo: 'Master', status: 'Unoccupied'}
    ];


    let nomes = [
        "Miguel", "Arthur", "Bernardo", "Heitor", "Davi", "Lorenzo",
        "Théo", "Pedro", "Gabriel", "Enzo", "Matheus", "Lucas",
        "Benjamin", "Nicolas", "Guilherme", "Rafael", "Joaquim",
        "Samuel", "Enzo Gabriel", "João Miguel", "Henrique",
        "Pedro Henrique", "Gustavo", "Murilo", "Pietro",
        "Lucca", "Felipe", "João Pedro", "Isaac", "Benício",
        "Daniel", "Anthony", "Leonardo", "Davi Lucca", "Bryan",
        "Eduardo", "João Lucas", "Victor", "João", "Cauã", "Antônio",
        "Vicente", "Caleb", "Gael", "Bento", "Caio", "Emanuel",
        "Vinícius", "João Guilherme", "Davi Lucas", "Noah",
        "João Gabriel", "João Victor", "Oliver", "Miguel Henrique",
        "Ruan", "Anthony Gabriel", "Danilo", "Luiz Miguel",
        "Francisco", "Kaique", "Otávio", "Augusto", "Levi",
        "Yuri", "Enrico", "Thiago", "Victor Hugo", "Ian",
        "Thomas", "Henry", "Luiz Felipe", "Ryan", "Arthur Miguel",
        "Davi Luiz", "Nathan", "Pedro Lucas", "Davi Miguel", "Raul",
        "Pedro Miguel", "Luiz Henrique", "Luan", "Martin",
        "Yago", "José", "André", "Gabriel", "Carlos Eduardo",
        "Bruno", "Rodrigo", "Luiz Gustavo", "Arthur Gabriel",
        "Luiz Otávio", "Breno", "Arthur Henrique", "Fernando",
        "Enzo Miguel", "Kauê",
        "Alice", "Sophia", "Helena", "Valentina", "Laura",	
        "Isabella", "Manuela", "Júlia", "Heloísa", "Luiza",	
        "Maria Luiza", "Lorena", "Lívia", "Giovanna",
        "Maria Eduarda", "Beatriz", "Maria Clara", "Cecília",	
        "Eloá", "Lara", "Maria Júlia", "Isadora", "Mariana", 	
        "Emanuelly", "Ana Júlia", "Ana Luiza", "Ana Clara", "Melissa",
        "Yasmin", "Maria Alice", "Isabelly", "Lavínia", "Esther", 	
        "Sarah", "Elisa", "Antonella", "Rafaela", "Maria Cecília",	
        "Liz", "Marina", "Nicole", "Maitê", "Isis", "Alícia", "Luna",	
        "Rebeca", "Agatha", "Letícia", "Maria", "Gabriela", "Ana Laura",	
        "Catarina", "Clara", "Ana Beatriz", "Vitória", "Olívia", 
        "Maria Fernanda", "Emilly", "Maria Valentina", 	
        "Milena", "Maria Helena", "Bianca", "Larissa", "Mirella",	
        "Maria Flor", "Allana", "Ana Sophia", "Clarice", "Pietra",	
        "Maria Vitória", "Maya", "Laís", "Ayla", "Ana Lívia",	
        "Eduarda", "Mariah", "Stella", "Ana	Erick", "Gabrielly",	
        "Sophie", "Carolina", "Maria Laura", "Maria Heloísa",	
        "Maria Sophia", "Fernanda", "Malu", "Analu", "Amanda",	
        "Aurora", "Maria Isis", "Louise	Tomás", "Heloise Lucas", 
        "Ana Vitória", "Ana Cecília", "Ana Liz", "Joana", "Luana",	
        "Antônia", "Isabel", "Bruna"	
    ]
    let sobrenomes = [
            "Agostinho", "Aguiar", "Albuquerque", "Alegria",
            "Alencastro", "Almada", "Alves", "Alvim",
            "Amorim", "Andrade", "Antunes", "Aparício",
            "Apolinário", "Araújo", "Arruda", "Assis",
            "Assunção", "Ávila", "Azambuja", "Baptista",
            "Barreto", "Barros", "Beira Mar", "Belchior",
            "Belém", "Bernardes", "Bittencourt", "Boaventura",
            "Bonfim", "Botelho", "Brites", "Brito", "Caetano",
            "Calixto", "Camacho", "Camilo", "Capelo", "Castro",
            "Cavalcante", "Chaves", "Conceição", "Corte", "Real",
            "Cortês", "Coutinho", "Crespo", "Cunha", "Curado",
            "Custódio", "Córdoba", "Damásio", "Dantas", "Dias",
            "Dinís", "Domingues", "Dorneles dos Reis", "Drumond",
            "D’Ávila", "Escobar", "Espinosa", "Esteves", "Evangelista",
            "Farias", "Ferrari", "Figueiredo", "Figueiroa", "Flores",
            "Fogaça", "Freitas", "Frutuoso", "Furtado", "Félix",
            "Galvão", "Garcia", "Gaspar", "Gentil", "Geraldes",
            "Gil", "Godinho", "Gomes", "Gonzaga", "Goulart",
            "Gouveia", "Guedes", "Guimarães", "Guterres",
            "Góis", "Hernandes", "Hilário", "Hipólito", "Ibrahim",
            "Ilha", "Infante", "Jaques", "Jesus", "Jordão",
            "Lacerda", "Lancastre", "Leiria", "Lessa", "Machado",
            "Maciel", "Magalhães", "Maia", "Maldonado", "Marinho",
            "Marques", "Martins", "Medeiros", "Meireles",  "Mello",
            "Mendes", "Menezes", "Mesquita", "Modesto", "Monteiro",
            "Morais", "Moreira", "Morgado", "Moura", "Muniz", "Neves",
            "Nogueira", "Novais", "Nóbrega", "Ornélas", "Oliveira", "Ourique",
            "Pacheco", "Padilha", "Paiva", "Paraíso", "Paris", "Peixoto", "Peralta",
            "Peres", "Pilar", "Pimenta", "Pinheiro", "Portela", "Quaresma",
            "Quarteira", "Queiroz", "Ramires", "Ramos", "Rebelo", "Resende",
            "Ribeiro", "Salazar", "Sales", "Salgado", "Salgueiro", "Sampaio",
            "Sanches", "Santana", "Siqueira", "Soares", "Subtil", "Tavares",
            "Taveira", "Teixeira", "Teles", "Torres", "Trindade", "Varela",
            "Vargas", "Vasconcelos", "Vasques", "Veiga", "Veloso", "Vidal",
            "Vieira", "Vilela", "Xavier", "Ximenes", "Xisco", "Zagalo", "Zanette", "Zaganelli"
    ];

    function randomizar_lista(lista){
        return lista[Math.floor(Math.random() * lista.length)];
    }

    let ipsum = new LoremIpsum();

    $scope.mensagens = [];

    $scope.pessoas = [];

    function randomizar_numero(min, max){
        return Math.floor(Math.random() * (max - min) + min );
    }

    let nacionalidades = [
                "South African",	
                "German",	
                "Argentine",	
                "Australian",	
                "Belgium",	
                "Bolivian",	
                "Brazilian",	
                "Canadian",	
                "Chilean",	
                "Chinese",	
                "Colombian",	
                "Korean",	
                "Ecuadorian",	
                "Spanish",	
                "American",	
                "Dannish",
                "Fins ou Finnish",
                "French",
                "Greek",
                "Indian",
                "English ou British",	
                "Israeli",	
                "Italian",	
                "Japanese",
                "Mexican",
                "Norwegian",	
                "Paraguayan",
                "Peruvian",	
                "Portugues",
                "Russian",
                "Swiss",
                "Uruguayan",
                "Venezuelan",
                "Persian / Iranian",
                "Iraqi",	
                "Egyptian",	
                "Lebanese",	
                "Turkish",	
                "Pakistani",
                "Syrian",	
                "Thai",	
                "Vietnamese",	
                "Costa Rican"
    ];
    $scope.array_nacionalidades=nacionalidades;

    for(let i = 0; i < 30; i++){
        $scope.pessoas.push({
            nome: randomizar_lista(nomes)+' '+randomizar_lista(sobrenomes)+' '+randomizar_lista(sobrenomes),
            idade: randomizar_numero(18, 60),
            nacionalidade: randomizar_lista(nacionalidades),
            quarto: randomizar_lista($scope.apartamentos)
        });
    }
    $scope.id = [];

    for(let i = 0 ; i < 15; i ++){
        $scope.mensagens.push(
            {
                pessoa: $scope.pessoas[i], 
                mensagem: ipsum.paragraph()
            });
    }
    
    $scope.count_avaliable_rooms = 0;
    $scope.count_maintenance_rooms = 0;
    $scope.count_occupied_rooms = 0;

    for(let i = 0; i < $scope.apartamentos.length; i++){
        if($scope.apartamentos[i].status == 'Unoccupied'){
            $scope.count_avaliable_rooms++;
        }
        else if($scope.apartamentos[i].status == 'Occupied'){
            $scope.count_occupied_rooms++;
        }
        else if($scope.apartamentos[i].status == 'Maintenance'){
            $scope.count_maintenance_rooms++;
        }
    }

    $scope.count_messages = $scope.mensagens.length;
    
    $scope.count_requests = 0; 
    $scope.count_reservations = 0;

    $scope.chamar = function(id, acao) {
        document.querySelector(id).style.display = acao;
    }

    console.log($scope.apartamentos);
    console.log($scope.mensagens);
    console.log($scope.count_avaliable_rooms);
    console.log($scope.count_maintenance_rooms);
    console.log($scope.count_occupied_rooms);
    console.log($scope.count_messages);
    console.log($scope.pessoas);
    console.log($scope.count_requests);
    console.log($scope.count_reservations);


    let tipos_comida=["aroma", 
    "bagel", 
    "batter", 
    "beans", 
    "beer", 
    "biscuit", 
    "bread", 
    "broth", 
    "burger", 
    "butter", 
    "cake", 
    "candy", 
    "caramel", 
    "caviar", 
    "cheese", 
    "chili", 
    "chocolate", 
    "cider", 
    "cobbler", 
    "cocoa", 
    "coffee", 
    "cookie", 
    "cream", 
    "croissant", 
    "crumble", 
    "cuisine", 
    "curd", 
    "dessert", 
    "dish", 
    "drink", 
    "eggs", 
    "entree", 
    "filet", 
    "fish", 
    "flour", 
    "foie", 
    "gras",
    "food", 
    "glaze", 
    "grill", 
    "hamburger", 
    "ice", 
    "juice", 
    "ketchup", 
    "kitchen", 
    "lard", 
    "liquor", 
    "margarine", 
    "marinade", 
    "mayo", 
    "mayonnaise", 
    "meat", 
    "milk", 
    "mousse", 
    "muffin", 
    "mushroom", 
    "noodle", 
    "nut", 
    "oil", 
    "olive", 
    "omelette", 
    "pan", 
    "pasta", 
    "paste", 
    "pastry", 
    "pie", 
    "pizza", 
    "plate", 
    "pot", 
    "poutine", 
    "pudding", 
    "raclette", 
    "recipe", 
    "rice", 
    "salad", 
    "salsa", 
    "sandwich", 
    "sauce", 
    "seasoning", 
    "skillet", 
    "soda", 
    "soup", 
    "soy", 
    "spice", 
    "steak", 
    "stew", 
    "syrup", 
    "tartar", 
    "taste", 
    "tea", 
    "toast", 
    "vinegar", 
    "waffle", 
    "water", 
    "wheat", 
    "wine", 
    "wok", 
    "yeast", 
    "yogurt" 


    ];
    $scope.comidas=[];
    for(let i = 0;i<35;i++){
        $scope.comidas.push({imagem:'https://image.shutterstock.com/image-photo/healthy-food-clean-eating-selection-260nw-722718082.jpg',
    tipo:randomizar_lista(tipos_comida),
    preco:randomizar_decimal(15,100)});


    }
    console.log($scope.comidas);
    
    
    function randomizar_decimal(min, max){
        return (Math.random() * (max - min) + min );
    }

    $scope.abrir=function(id){
        document.querySelector('#'+ id).style.display="block";

    }
});