<template>
  <div class="questions">

    <div class="questions-header">
      <h3 class="q-ma-none text-h4 text-weight-thin">Questions</h3>
      <q-btn icon="add" color="primary" round @click="add">
        <q-tooltip class="bg-black">Add new question</q-tooltip>
      </q-btn>
    </div>
    
    <draggable
      tag="ul"
      :list="questions"
      v-bind="dragOptions"
      class="list-group q-mt-none"
      handle=".handle"
      item-key="name"
    >

      <template #item="{ element, index }">
        <li class="list-group-item shadow-2"> 
          <q-expansion-item
            dense
            expand-separator
            class="q-px-none "
          >
            <template v-slot:header >

              <q-item-section avatar>
                <q-btn icon="menu" class="handle q-mx-none" flat>
                  <q-tooltip class="bg-primary">Drag to reorder</q-tooltip>
                </q-btn>
              </q-item-section>
              
              <q-item-section>
                <h5 class="q-ma-none text-subtitle1 text-weight-bold"> 
                  Question number {{index + 1}}
                </h5>
              </q-item-section>

              <q-item-section side>
              </q-item-section>
            </template>

            <q-form
              class="q-gutter-md question-form no-margin"
            >

              <div class="row q-mx-none q-gutter-sm q-sm-gutter-none">
                <q-input
                  filled
                  dense
                  v-model="element.question_text"
                  label="Enter question"
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
                  v-model="element.question_type" 
                  :options="types" 
                  class="col "
                  hint="Type"
                  label="Type" 
                  stack-label 
                />
                <q-input
                  dense
                  v-model.number="element.duration"
                  type="number"
                  label="Duration" 
                  hint="Duration"
                  filled
                  class="col "
                  max="120"
                >
                  <template v-slot:append>
                    <q-icon name="schedule" />
                  </template>
                </q-input>
                <q-input
                  dense
                  v-model.number="element.point"
                  label="Points" 
                  stack-label 
                  type="number"
                  hint="Points"
                  filled
                  class="col "
                />
              </div>
              
              <!-- <div class="q-ml-sm">
                <h6 class="q-ma-none text-subtitle2 text-weight-thin">Tags</h6>
                <Multiselect
                  :classes="{'tag': 'multiselect-tag-custom'}"
                  v-model="tags"
                  :options="Tags"
                  mode="tags"
                  placeholder="Select your characters"
                  :searchable="true"
                  :createTag="true"
                  class="q-mt-sm"
                />
              </div> -->

              <q-separator />
              
              <q-list v-if="element.question_type === 'test'" class="options-list q-mt-none q-ml-none" dense >
                <q-item 
                  v-for="(option, option_index) in element.answers"
                  :key="option_index"
                  class="option align-center" dense
                >
                  <q-item-section side>
                    <span class="text-bold">{{option_index + 1}}</span>
                  </q-item-section>
                  <q-item-section>
                    <q-input
                      outlined
                      :label="'Option ' + (option_index + 1)"
                      v-model="element.answers[option_index]"
                      lazy-rules
                      dense
                      class="q-ma-none"
                    />
                  </q-item-section>
                  <q-item-section side>
                    <q-toggle
                      :true-value="isOptionToggled(index, option_index)"
                      :false-value="!isOptionToggled(index, option_index)"
                      v-model="element.correct_answer" 
                      :val="'' + index + ' ' + option_index"
                      @update:model-value="onCorrectAnswerToggleChanged"
                      color="secondary"
                    >
                      <q-tooltip>
                        Right asnwer
                      </q-tooltip>
                    </q-toggle>
                    
                  </q-item-section>
                </q-item>
              </q-list>

              <q-input
                v-else
                outlined
                :label="'Fill In answer'"
                v-model="element.correct_answer"
                lazy-rules
                dense
                class="q-my-none q-mt-sm q-ml-lg"
              />

              <q-btn label="Delete" type="reset" icon="delete" color="primary" flat class="q-ml-sm" @click="removeAt(index)" />
            </q-form>
          </q-expansion-item>
        </li>
      </template>
    </draggable>

  </div>
</template>

<script>
import draggable from "vuedraggable";
import Multiselect from '@vueform/multiselect'

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
      questions: [
      ],
      simpleQuestion: {
        "question_text": "Enter question",
        "question_type": "test",
        "answers": ['', '', '', ''],
        "correct_answer": [],
        "point": 10,
        "duration": 45
      },
      dragging: false,
      redModel: true,
      tags: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ],
      Tags: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ],
      types: [
        'test', 'fill_in'
      ],
    };
  },
  watch: {
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
        ghostClass: "ghost-question",
        chosenClass: "chosen-question",
        dragClass: "dragging-question",
      };
    }
  },
  methods: {
    removeAt(idx) {
      this.questions.splice(idx, 1);
    },
    add() {
      this.questions.push({...this.simpleQuestion});
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
    },
    isOptionToggled(index, option_index){
      return this.questions[index].correct_answer.some((ob) => ob.option_index === option_index)
    },
    onCorrectAnswerToggleChanged(val, evt){
      // console.log(val, evt)
      let lastElement = val.pop()
      let [index, option_index] = lastElement.split(' ')
      this.questions[index].correct_answer = [lastElement]
    }
  }
};
</script>

<style src="@vueform/multiselect/themes/default.css">
</style>

<style lang="scss">
.multiselect-tag-custom {
  background: $secondary;
  color: var(--ms-tag-color,#fff);
  font-size: var(--ms-tag-font-size,.875rem);
  line-height: var(--ms-tag-line-height,1.25rem);
  font-weight: var(--ms-tag-font-weight,600);
  padding: var(--ms-tag-py,.125rem) 0 var(--ms-tag-py,.125rem) var(--ms-tag-px,.5rem);
  border-radius: var(--ms-tag-radius,4px);
  margin-right: var(--ms-tag-mx,.25rem);
  margin-bottom: var(--ms-tag-my,.25rem);
  display: flex;
  align-items: center;
  white-space: nowrap;
}

</style>

<style lang="scss" scoped>
.questions {
  margin: 0;
  padding: 0;
  padding-top: 24px;
  // background: $secondary;
  &-header {
    display: flex;
    justify-content: flex-start;
    align-content: center;
    gap: 24px;
    // height: 64px;
    // background: red;
    margin: 0 24px;
    padding: 24px 0;
    h3 {
      font-weight: bold;
      // line-height: 64px;
    }
  }
}

.handle {
  // display: block;;
  // border: none;
  // width: 48px;
  // margin: 0 auto;
}

.list-group {
  list-style: none;
  background: $secondary;
  padding: 12px;
  margin-bottom: 0;

  min-height: 100vh;
  
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

.chosen-question {
  border-radius: 5px;
  opacity: 1 !important;    
  border: 2px solid #F47878;
}
.dragging-question {
  opacity: 0.8 !important;
  box-shadow: none !important;
  border-radius: 5px;
  border: 2px solid #F47878;
}

.ghost-question {
  border-radius: 5px;
  opacity: 1 !important;
}


</style>