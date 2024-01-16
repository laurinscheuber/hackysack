<template>
  <div class="m-3">
    <p>
      Entdecke die fesselnde Welt der Puzzles, in der Stück für Stück eine faszinierende Herausforderung entsteht.
    </p>
  </div>
  <div class="m-3">
    <CollapsibleComponent title="für Anfänger">
      <div class="grid grid-cols-12 gap-8">
        <ItemCard class="col-span-12 md:col-span-6 lg:col-span-4" title="Disney The Ice Queen: Anna and Elsa"
                  :image="{ src: 'https://www.galaxus.ch/im/productimages/2/9/0/8/3/1/4/3/1/6/7/6/4/2/1/4/3/1/7/afc3d59a-5e80-4c55-834c-2667d87944bb_cropped.jpg?impolicy=ProductTileImage&resizeWidth=992&resizeHeight=761&cropWidth=992&cropHeight=761&quality=high', title: 'Türen Puzzle'}"
                  color="puzzle"
                  :attributes="[{label: 'Anzahl Teile', value: '40'}, {label: 'Verlag', value: 'Ravensburger'}]"/>
        <ItemCard class="col-span-12 md:col-span-6 lg:col-span-4" title="Türen Puzzle"
                  :image="{ src: 'https://www.galaxus.ch/im/productimages/8/2/8/1/7/0/0/8/1/4/1/8/6/3/9/2/7/5/9/5e6ce247-fef8-4d53-b877-ff8c9423667d.jpg?impolicy=ProductTileImage&resizeWidth=1000&resizeHeight=750&cropWidth=1000&cropHeight=750&resizeType=downsize&quality=high', title: 'Türen Puzzle'}"
                  color="puzzle"
                  :attributes="[{label: 'Anzahl Teile', value: '1000'}, {label: 'Verlag', value: 'Ravensburger'}]"/>
      </div>
    </CollapsibleComponent>
    <CollapsibleComponent title="für Fortgeschrittene">
      <div class="grid grid-cols-12 gap-8">
        <ItemCard class="col-span-12 md:col-span-6 lg:col-span-4" title="Stunning Hawaii"
                  :image="{ src: 'https://www.galaxus.ch/im/productimages/7/6/5/6/7/8/3/3/8/5/0/6/2/6/5/3/7/8/4/d9594cf9-f6e1-46c4-953f-398df606d102_cropped.jpg?impolicy=ProductTileImage&resizeWidth=1984&resizeHeight=1476&cropWidth=1984&cropHeight=1476&quality=high', title: 'Stunning Hawaii Puzzle'}"
                  color="puzzle"
                  :attributes="[{label: 'Anzahl Teile', value: '5000'}, {label: 'Verlag', value: 'Ravensburger'}]"/>
        <ItemCard class="col-span-12 md:col-span-6 lg:col-span-4" title="Planetary"
                  :image="{ src: 'https://www.galaxus.ch/im/productimages/6/2/5/4/9/5/2/2/4/2/3/9/1/0/1/9/8/0/4/35bdb067-5e93-4a28-899f-e928da189f30_cropped.jpg?impolicy=ProductTileImage&resizeWidth=1984&resizeHeight=1466&cropWidth=1984&cropHeight=1466&quality=high', title: 'Stunning Hawaii Puzzle'}"
                  color="puzzle"
                  :attributes="[{label: 'Anzahl Teile', value: '5000'}, {label: 'Verlag', value: 'Ravensburger'}]"/>
        <ItemCard class="col-span-12 md:col-span-6 lg:col-span-4" title="At the watering hole"
                  :image="{ src: 'https://www.galaxus.ch/im/productimages/5/5/0/2/1/8/5/2/2/5/7/1/3/7/7/1/5/8/2/c395bb9c-cdea-4f0f-b7cf-9febaf183fdb_cropped.jpg?impolicy=ProductTileImage&resizeWidth=700&resizeHeight=544&cropWidth=700&cropHeight=544&quality=high', title: 'Stunning Hawaii Puzzle'}"
                  color="puzzle"
                  :attributes="[{label: 'Anzahl Teile', value: '18000'}, {label: 'Verlag', value: 'Ravensburger'}]"/>
      </div>
    </CollapsibleComponent>
    <CollapsibleComponent title="für Tierliebhaber">
      <div class="grid grid-cols-12 gap-8">
        <ItemCard class="col-span-12 md:col-span-6 lg:col-span-4" title="Sloth Selfie"
                  :image="{ src: 'https://www.galaxus.ch/im/productimages/8/7/2/9/4/6/0/4/1/4/7/6/3/7/3/4/0/7/5/9e83201a-b59c-4d38-8327-816f7e5eb623_cropped.jpg?impolicy=ProductTileImage&resizeWidth=1400&resizeHeight=998&cropWidth=1400&cropHeight=998&quality=high', title: 'Sloth Selfie Puzzle'}"
                  color="puzzle"
                  :attributes="[{label: 'Anzahl Teile', value: '500'}, {label: 'Verlag', value: 'Ravensburger'}]"/>
        <ItemCard class="col-span-12 md:col-span-6 lg:col-span-4" title="Grossartige Tierwelt"
                  :image="{ src: 'https://www.galaxus.ch/im/Files/1/0/6/1/4/1/5/9/16652_Aimee%20Steward%20Grossartige%20Tierwelt_2000.jpg?impolicy=ProductTileImage&resizeWidth=1984&resizeHeight=1436&cropWidth=1984&cropHeight=1436&quality=high', title: 'Grossartige Tierwelt Puzzle'}"
                  color="puzzle"
                  :attributes="[{label: 'Anzahl Teile', value: '2000'}, {label: 'Verlag', value: 'Ravensburger'}]"/>
        <ItemCard class="col-span-12 md:col-span-6 lg:col-span-4" title="African Jungle"
                  :image="{ src: 'https://www.galaxus.ch/im/productimages/3/3/1/2/5/5/2/3/1/4/3/1/8/6/0/5/7/6/047a5023-d6e5-4b30-96ca-288c68449ff7_cropped.jpg?impolicy=ProductTileImage&resizeWidth=1400&resizeHeight=1034&cropWidth=1400&cropHeight=1034&quality=high', title: 'African Jungle Puzzle'}"
                  color="puzzle"
                  :attributes="[{label: 'Anzahl Teile', value: '2000'}, {label: 'Verlag', value: 'Educa'}]"/>
        <ItemCard class="col-span-12 md:col-span-6 lg:col-span-4" title="Roses"
                  :image="{ src: 'https://www.galaxus.ch/im/productimages/3/3/2/3/2/3/1/1/6/1/4/8/1/7/6/0/0/1/3/3df67f19-f1cf-464c-893a-9d5905cfab3a_cropped.jpg?impolicy=ProductTileImage&resizeWidth=1042&resizeHeight=1400&cropWidth=1042&cropHeight=1400&quality=high', title: 'Roses Puzzle'}"
                  color="puzzle"
                  :attributes="[{label: 'Anzahl Teile', value: '2000'}, {label: 'Verlag', value: 'Heye'}, {label: 'Künstlerin', value: 'Rosina Wachtmeister'}]"/>
        <ItemCard class="col-span-12 md:col-span-6 lg:col-span-4" title="WWF WAldtiere Puzzle"
                  :image="{ src: 'https://www.galaxus.ch/im/productimages/1/9/9/7/0/2/5/1/0/6/4/4/5/5/3/2/7/6/0/cfcab190-e967-4edc-9e50-d02610b76c79_cropped.jpg?impolicy=ProductTileImage&resizeWidth=700&resizeHeight=532&cropWidth=700&cropHeight=532&quality=high', title: 'WWF Waldtiere Puzzle'}"
                  color="puzzle"
                  :attributes="[{label: 'Anzahl Teile', value: '81'}, {label: 'Verlag', value: 'Janod'}]"/>
      </div>
    </CollapsibleComponent>
  </div>
</template>

<script setup lang="ts">
import CollapsibleComponent from "@/components/CollapsibleComponent.vue";
import ItemCard from "@/components/ItemCard.vue";
</script>

<style scoped></style>