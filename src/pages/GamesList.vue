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
      <li class="list-group-item shadow-2"> 
        <q-btn icon="menu" class="handle" flat>
          <q-tooltip class="bg-accent">Drag to reorder</q-tooltip>
        </q-btn>

        <q-form
          class="q-gutter-md question-form no-margin"
        >

          <div class="row q-mx-none q-gutter-sm q-sm-gutter-none">
            <q-input
              filled
              dense
              v-model="element.text"
              label="Question text*"
              hint="Question"
              class="col-grow q-mt-none"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
            />
          </div>

          <div class="row q-mx-none q-gutter-sm q-sm-gutter-none justify-between ">
            <q-select 
              dense
              filled 
              v-model="model" 
              :options="options" 
              class="col "
              hint="Type"
              label="Type" 
              stack-label 
            />
            <q-select 
              dense
              filled 
              v-model="model" 
              :options="options" 
              class="col "
              label="Type" 
              hint="Subject"
              stack-label 
            />
            <q-input
              dense
              v-model.number="model"
              type="number"
              label="Type" 
              hint="Duration"
              filled
              class="col "
            >
              <template v-slot:append>
                <q-icon name="schedule" />
              </template>
            </q-input>
            <q-input
              dense
              v-model.number="model"
              label="Type" 
              stack-label 
              type="number"
              hint="Points"
              filled
              class="col "
            />
          </div>
          
          <div class="q-ml-sm">
            <!-- <h6 class="q-ma-none">Tags</h6> -->
            <Multiselect
              v-model="tags"
              :options="Tags"
              mode="tags"
              placeholder="Select your characters"
              :searchable="true"
              :createTag="true"
              class="q-mt-sm"
            />
          </div>

          <q-separator />

          <q-list class="options-list q-mt-none q-ml-none" dense >
            <q-item class="option align-center" clickable dense>
              <q-item-section side>
                <span class="text-bold">1</span>
              </q-item-section>
              <q-item-section>
                <q-input
                  outlined
                  label="Option 1 *"
                  lazy-rules
                  dense
                  class="q-ma-none"
                />
              </q-item-section>
              <q-item-section side>
                <q-toggle
                  :false-value="true"
                  :true-value="false"
                  color="red"
                  v-model="redModel"
                >
                  <q-tooltip>
                    Right asnwer
                  </q-tooltip>
                </q-toggle>
                
              </q-item-section>
            </q-item>
          </q-list>

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
import Multiselect from '@vueform/multiselect'
import { ref } from 'vue'
let id=3;

export default {
  name: "handle",
  display: "Handle",
  instruction: "Drag using the handle icon",
  order: 5,
  components: {
    Multiselect,
    draggable
  },
  data() {
    return {
      list: [
        { name: "John", text: "", id: 0 },
        { name: "Joao", text: "", id: 1 },
        { name: "Jean", text: "", id: 2 }
      ],
      dragging: false,
      redModel: true,
      tags: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ],
      Tags: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ]
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
    filterFn (val, update) {
      if (val === '') {
        update(() => {
          this.tags = Tags
        })
        return
      }

      update(() => {
        const needle = val.toLowerCase()
        this.tags = Tags.filter(v => v.toLowerCase().indexOf(needle) > -1)
        
      })
    }
  }
};
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
<style lang="scss" scoped>

.handle {
  display: block;;
  border: none;
  width: 48px;
  margin: 0 auto;
}

.list-group {
  list-style: none;
  background: lightblue;
  padding: 12px;
  
  &-item {
    margin: 12px;
    padding: 12px;
    background: #fff;
    border-radius: 5px;
  }
}

.options-list {
  padding: 12px;
  .option {
    margin: auto 0;
    padding: 2px 0;
  }
}

.question-form {
  background: #fff;
  margin: 12px;
  // padding: 12px;  
}

.chosen-ticket {
  opacity: 1 !important;
  border: 2px solid #F47878;
}
.dragging-ticket {
    opacity: 0.8 !important;
    box-shadow: none !important;
    border: 2px solid #F47878;
}

.ghost-ticket {
  opacity: 1 !important;
}

</style>