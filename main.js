define(function (require, exports, module) {
    "use strict";

    var CommandManager = brackets.getModule("command/CommandManager"),
        EditorManager  = brackets.getModule("editor/EditorManager"),
        Menus          = brackets.getModule("command/Menus");

    
    // Function to run when the menu item is clicked
        
    function html5Template() {
         var editor = EditorManager.getFocusedEditor();
        if (editor) {
            
   
            var html5_template =
                "<!DOCTYPE html>" + "\n" +
                "<html lang=\"en\">" + "\n" +
                "<head>" + "\n" +
                "<meta charset=\"UTF-8\">" + "\n" +
                "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">" + "\n" +
                
                "<meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">" + "\n" +
                
                "\t" + "<title> Title </title>" + "\n" +
                "</head>" +"\n\n" +
                "\t" + "<body>" + "\n" +
                "\n" +
                "</body>" + "\n" +
                "</html>" +"\n"                
            ;
            
            var insertionPos = editor.getCursorPos();
            editor.document.replaceRange(html5_template, insertionPos);
        }
    }
    
    var COMMAND_ID = "html5template.tanishbaansal";   // package-style naming to avoid collisions
    CommandManager.register("HTML5 Template", COMMAND_ID, html5Template);


    var menu = Menus.getMenu(Menus.AppMenuBar.EDIT_MENU);
    menu.addMenuItem(COMMAND_ID, [{ "key": "Tab-Shift" }, { "key": "Tab-Shift"}]);
    
    
});                           