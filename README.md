# NotepadAppTeachReact

## Project set up
npx react-native init NotepadAppTeachReact --template react-native-template-typescript


# Prerequisites

### iOS

- Install Xcode (from App Store desktop app)
- Run Xcode ( install additional platform tools )


### Android

Install Android Studio, Android SDK


### React Native:

```
brew install yarn
bew install watchman
brew install cocoapods

yarn global add react-native-cli
```
watchman: a tool which allows to track changes in filesystem and is used by RN bundler

cocoapods: dependency manager for Swift/Objective-C which is used for iOS build

## Run project
`yarn install && (cd ios && pod install)`

ios:
`react-native run-ios`

android:
`react-native run-android`


## Handy
- add adb commant to PATH
- use pidcat to view android logs
- React Native Console plugin inside IntelliJ
- Node Version Manager for nvm versions

# Instrukcja
Zadanie polega na przygotowaniu prostej aplikacji react-native słuzacej do dodawania notatek. 

## Instrukcja

Rozpoczynamy od odpalenia aplikacji ( według instrukcji opisanej powyżej). Przeglądnij aktualny kod.

**Aktualny stan**:
Aplikacja w obecnej formie ma zahardcodowane treści notatek. Guzik "+" otwiera okno, jednak funkcjonalność dodawania notatni nie jest jeszcze obslugiwana.

Celem tej części jest implementacja funkcjonalności dodawania notatek. 

1. Przygotowanie listy notatek.
    Obecnie w pliku `NoteList.tsx` lista notatek jest zahardcodowana. Konieczne jest przygotowanie komponentu, który będzie renderował notatki.
    
    - https://reactnative.dev/docs/flatlist
    
    Podstawowa implementacja może wyglądać następująco:
    
    ```
    const NotesList = () => {
      const notes = [{title: 'Example title', content: 'Example content'}];
      const renderItem = (item: any) => {
        return <SingleNote title={item.item.title} content={item.item.content} />;
      };
    
      return (
        <FlatList
          style={styles.container}
          data={notes}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      );
    };
    ```

2. Update komponentu `NewNoteModal.tsx`, aby korzystał in w komponentu TextInput. 
    - https://reactnative.dev/docs/textinput
    
    ```
   const TITLE_PLACEHOLDER = 'Title';
   const CONTENT_PLACEHOLDER = 'Content';
   
   const NewNoteModal = (props: ModalProps) => {
     const [titleValue, onTitleChange] = React.useState('');
     const [contentValue, onContentChange] = React.useState('');
     return (
       <SimpleModal
         onModalClose={props.onModalClose}
         title={TITLE}
         proceedButton={{
           text: ADD_NEW_NOTE_TEXT,
           onClickAction: () => {},
         }}>
         <View style={styles.inputContainer}>
           <View style={styles.container}>
             <TextInput
               style={styles.input}
               onChangeText={text => onTitleChange(text)}
               value={titleValue}
               multiline={false}
               placeholder={TITLE_PLACEHOLDER}
             />
           </View>
           <View style={styles.container}>
             <TextInput
               style={[styles.input, styles.multilineInput]}
               onChangeText={text => onContentChange(text)}
               value={contentValue}
               multiline={true}
               placeholder={CONTENT_PLACEHOLDER}
             />
           </View>
         </View>
       </SimpleModal>
     );
   };
   
   interface Style {
     input: TextStyle;
     multilineInput: TextStyle;
     container: ViewStyle;
     inputContainer: ViewStyle;
   }
   
   const styles = StyleSheet.create<Style>({
     input: {
       height: 40,
       width: '100%',
       borderColor: Colors.GREY,
       borderWidth: 1,
     },
     multilineInput: {
       height: 200,
       textAlignVertical: 'top',
     },
     container: {
       margin: 5,
       flexDirection: 'row',
       alignItems: 'center',
     },
     inputContainer: {
       paddingTop: 10,
       paddingBottom: 10,
       alignItems: 'flex-end',
     },
   });

    ```
3. Chcemy dodane notatki wyświetlać w liście notatek. Do tego celu dodamy **redux**.  
    - https://redux.js.org/
    - https://react-redux.js.org/api/hooks
    
    ``yarn add react-redux``
    ``yarn add @types/react-redux``
    
    A. Tworzymy plik `src/redux/store.ts`:
    ```
    import {createStore} from 'redux';
    import notesReducer from './notesReducer';
       
    const store = createStore(notesReducer);
       
    export default store;

    ```
   B. Przygotowujemy również akcje potrzebne do dodawania notatek `src/redux/notesActions.tsx`:
   ```
   export const ADD_NOTE_TYPE = '[notes] ADD_NOTE';
   
   export function addNote(title: string, content: string) {
     return {type: ADD_NOTE_TYPE, title, content};
   }

     ```
   
   C. Następnie dodaj reducery dla akcji. Reducer może wyglądać:
   
   ```
   export type SingleNote = {
     title: string;
     content: string;
   };
   
   export interface NotesState {
     notes: Array<SingleNote>;
   }
   
   export const initialNotesState: NotesState = {
     notes: [],
   };
   
   function notesReducer(
     state: NotesState = initialNotesState,
     action: AnyAction,
   ): NotesState {
     switch (action.type) {
       case ADD_NOTE_TYPE:
         return {
           notes: [
             ...state.notes,
             {
               title: action.title,
               content: action.content,
             },
           ],
         };
       default:
         return state;
     }
   }
   
   export default notesReducer;
    ```
   D. Korzystamy z akcji w `NewNoteModal`.
   
   - useDispatch
   - useState
   
   E. W `NotesList.tsx` zamiast zahardkogowanej liczby notatek korzystamy z wartości zapisanej w stanie redux.
   
   ``` const notes = useSelector((state: NotesState) => state.notes);```
   
   F. W `App.tsx` uzywamy Provider:
    
       ```
       const App = () => {
         return (
           <Provider store={store}>
             <View>
               <Header />
               <NotesList />
             </View>
           </Provider>
         );
       };
       ```
   G. Nowo dodane notatki powinny wyświetlać się na liście notatek.
   
   **Przykładowa implementacja tego zadania znajduje się na gałęzi `Add_basic_redux`.**
   
  4. Dodanie persystencji. Obecnie po odświeżeniu aplikacji ( Command + R na iOS, command + M/refresh - android )lista notatek jest czyszczona.
  
      `yarn add @react-native-community/async-storage`
      
      `react-native link @react-native-community/async-storage`
      
      `yarn add redux-persist`
      
      - https://github.com/rt2zz/redux-persist
      
      Przykładowe rozwiązanie:
       - `store.ts`:
        ```
     const persistConfig = {
             storage: AsyncStorage,
             key: 'notes',
           };
     const persistedReducer = persistReducer(persistConfig, notesReducer);
     
     export const store = createStore(persistedReducer);
     export const persistor = persistStore(store);
     ```
        - `App.tsx`:
       ```
       <PersistGate persistor={persistor}>
               <View>
                 <Header />
                 <NotesList />
               </View>
       </PersistGate>
       ```
       
   Po przeładowaniu aplikacji, wcześniej dodane notatki powinny być ciągle widoczne.
       
   Przykładowa implementacja tego zadania znajduje się na gałęzi `Persisted_redux_state`
       
  
  
   
    
   

