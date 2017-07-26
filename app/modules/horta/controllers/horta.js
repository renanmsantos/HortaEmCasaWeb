'use strict';

angular.module('hortaApp')
    .controller('HortaCtrl', function($scope) {
        $scope.listPlants = [];
        $scope.types = [
            {
                id: 1,
                url:"../../../img/tipos/tipo1.png",
                description : "Direto na terra",
                mesure: "2m x 2m x 3m",
                comments : "Ideal para quem tem quintal com espaço, nesse modelo tradicional as sementes ou mudas são plantadas direto na terra."
            },
            {
                id: 2,
                url:"../../../img/tipos/tipo2.png",
                description : "Vasos",
                mesure: "2m x 2m x 3m",
                comments : "Vasos são alternativas práticas tanto para quem mora em casa quanto em apartamento, com várias opções de tamanhos, materiais, formatos e cores."
            },
            {
                id: 3,
                url:"../../../img/tipos/tipo3.png",
                description : "Embalagens recicláveis",
                mesure: "2m x 2m x 3m",
                comments : "Garrafas pet, latas de refrigerante ou alimentos, caixas de leite, potes de vidro. É uma saída barata, rápida e sustentável."
            },
            {
                id: 4,
                url:"../../../img/tipos/tipo4.png",
                description : "Floreiras",
                mesure: "2m x 2m x 3m",
                comments : "Oferecendo um bom espaço, as floreiras são ótimas para uma horta compacta em pequenos espaços."
            },
            {
                id: 5,
                url:"../../../img/tipos/tipo5.png",
                description : "Caixas de madeira",
                mesure: "2m x 2m x 3m",
                comments : "Espaçosos e baratos, caixotes de madeira e paletes podem ser boas escolhas."
            },
            {
                id: 6,
                url:"../../../img/tipos/tipo6.png",
                description : "Horta vertical",
                mesure: "2m x 2m x 3m",
                comments : "Ideal para quem mora em apartamento, esse modelo consiste em montar a horta aproveitando espaços próximos a paredes. A horta vertical pode ser plantada em vasos, embalagens recicladas, estruturas de madeira e sapateiras."
            }
        ];

        $scope.plants = [
            {
                id : 1,
                url: "../../../img/hortalicas/hortela.png",
                description: "Hortelã",
                howToPlant: "A hortelã pode ser plantada por mudas ou sementes, conforme a espécie. É aconselhado fazer o plantio em um local sem ação de ventos fortes, uma vez que estes podem prejudicar o crescimento da planta.",
                careDescription: "É preciso manter o solo adubado e irrigado, além de controlar o crescimento de ervas daninhas. A colheita pode ser feita a qualquer momento, tanto pela haste quanto apenas de algumas folhas. Ao colher pela haste, corte-a acima do primeiro par de folhas.",
                carePeriod: "A cada 2 semanas"
            },
            {
                id : 2,
                url: "../../../img/hortalicas/salsinha.png",
                description: "Salsinha",
                howToPlant: "As sementes podem ser plantadas em recipientes com profundidade de, pelo menos, 30 cm, para favorecer o desenvolvimento das raízes. Para agilizar a germinação, uma dica é deixar as sementes de molho em água por um dia antes de plantá-las.",
                careDescription: "Mantenha o solo sempre bem irrigado e planeje adubações frequentes. A colheita pode ser feita, em média, de dois a três meses após o plantio. As folhas devem ser colhidas inteiras.",
                carePeriod: "A cada 2 semanas"
            },
            {
                id : 3,
                url: "../../../img/hortalicas/cebolinha.png",
                description: "Cebolinha",
                howToPlant: "Pode ser plantada em sementes ou mudas. Caso as sementes não sejam plantadas diretamente no local definitivo, o transplante pode ser realizado depois de 30 a 40 dias.",
                careDescription: "Solo irrigado e adubado, com abundância de nutrientes. A colheita pode ser feita de dois meses e meio a quatro meses após o plantio. Colha as folhas inteiras, retirando-as pela base e nunca pela metade.",
                carePeriod: "a cada 3 semanas"
            }
        ];

        $scope.select = function(idSelected){
            $scope.typeSelected = idSelected;
        }

        $scope.addPlant = function(plant){
            if($scope.listPlants.indexOf(plant) == -1) {
                $scope.listPlants.push(plant);
            }else{
                alert("Hortaliça já inserida!")
            }

        }

    });
