<template>
  <div class="row">
    <div class="col-1">
      <button class="btn btn-secondary button" @click="add">Add</button>
    </div>

    <div class="col-7">
      <h3>Draggable {{ draggingInfo }}</h3>

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
              {{ element.name }}
            <q-form
              @submit="onSubmit"
              @reset="onReset"
              class="q-gutter-md question-form"
            >
              <q-select filled v-model="model" :options="options" label="Label (stacked)" stack-label :dense="dense" :options-dense="denseOpts" />

              <q-input
                filled
                v-model="element.text"
                label="Your name *"
                hint="Name and surname"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
              />


              <div>
                <q-btn label="Submit" type="submit" color="primary"/>
                <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
                <q-btn label="Delete" type="reset" color="red" flat class="q-ml-sm" @click="removeAt(index)" />
              </div>
            </q-form>
          </li>
        </template>
      </draggable>
    </div>

    <rawDisplayer class="col-3" :value="list" title="List" />
  </div>
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
  float: left;
  padding-top: 8px;
  padding-bottom: 8px;
}

.list-group {
  list-style: none;
  &-item {
    margin: 12px;
    padding: 12px;
    border: 1px solid red;
    background: lightcoral;
    border-radius: 1px;
  }
}

.question-form {
  background: #fff;
  margin: 12px;
  padding: 12px;  
}

.chosen-ticket {
    background: darkorange !important;
    opacity: 0;
}
.dragging-ticket {
    background: darkred !important;
    background-color: darkred !important;
    opacity: 1 !important;
    box-shadow: none !important;
    border: 2px solid black;
}

.ghost-ticket {
  opacity: 1 !important;
}

</style>