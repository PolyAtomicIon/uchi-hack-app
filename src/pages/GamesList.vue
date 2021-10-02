<template>
<!-- 
  <h3>Draggable {{ draggingInfo }}</h3>
  <button class="btn btn-secondary button" @click="add">Add</button> -->

  <draggable
    tag="ul"
    :list="list"
    v-bind="dragOptions"
    class="list-group"
    handle=".handle"
    item-key="name"
  >
    <template #item="{ element, index }">
      <li class="list-group-item">
        <button class="handle"></button>
        <q-form
          @submit="onSubmit"
          @reset="onReset"
          class="q-gutter-md question-form"
        >

          <div class="row q-gutter-sm q-sm-gutter-none">
            <q-input
              filled
              v-model="element.text"
              label="Question text*"
              hint="Name and surname"
              class="col-grow"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
            />
            <q-select 
              filled 
              v-model="model" 
              :options="options" 
              class="col-grow"
              label="Type" 
              hint="Type"
              stack-label 
              :dense="dense" 
              :options-dense="denseOpts"
            />
          </div>

          <q-expansion-item  default-opened icon="menu" label="Options" caption="options" >
            <q-separator />
            <q-input
              filled
              label="Option 1 *"
              hint="Name and surname"
              lazy-rules
              class="q-ma-lg"
            />
            <q-input
              filled
              label="Your name *"
              hint="Name and surname"
              class="q-ma-lg"
              lazy-rules
            />
          </q-expansion-item>
          <div>
            <q-btn label="Submit" type="submit" color="primary"/>
            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
            <q-btn label="Delete" type="reset" color="red" flat class="q-ml-sm" @click="removeAt(index)" />
          </div>
        </q-form>
      </li>
    </template>
  </draggable>
</template>

<script>
import draggable from "vuedraggable";
import { ref } from 'vue'
let id=3;
export default {
  name: "handle",
  display: "Handle",
  instruction: "Drag using the handle icon",
  order: 5,
  components: {
    draggable
  },
  data() {
    return {
      list: [
        { name: "John", text: "", id: 0 },
        { name: "Joao", text: "", id: 1 },
        { name: "Jean", text: "", id: 2 }
      ],
      dragging: false
    };
  },
  setup () {
    return {
      model: ref(null),

      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ],

      dense: ref(false),
      denseOpts: ref(false)
    }
  },
  computed: {
    draggingInfo() {
      return this.dragging ? "under drag" : "";
    },
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost-ticket",
        chosenClass: "chosen-ticket",
        dragClass: "dragging-ticket",
      };
    }
  },
  methods: {
    removeAt(idx) {
      this.list.splice(idx, 1);
    },
    add: function() {
      id++;
      this.list.push({ name: "Juan " + id, id, text: "" });
    },
  }
};
</script>
<style lang="scss" scoped>

.handle {
  display: block;;
  border: none;
  background: red;
  height: 24px;
  width: 48px;
  margin: 0 auto;
}

.list-group {
  list-style: none;
  background: blue;
  padding: 12px;
  
  &-item {
    margin: 12px;
    padding: 12px;
    border: 1px solid red;
    background: #fff;
    border-radius: 1px;
  }
}

.question-form {
  background: #fff;
  margin: 12px;
  padding: 12px;  
}

.chosen-ticket {
    opacity: 1;
}
.dragging-ticket {
      opacity: 1 !important;
    box-shadow: none !important;
    border: 2px solid black;
}

.ghost-ticket {
  opacity: 1 !important;
}

</style>