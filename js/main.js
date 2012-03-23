(function($) {
    $(document).ready(function() {
        //Globals
        COLUMN_HOMEPAGE = 'homepage';
        COLUMN_TALENT = 'talent';
        COLUMN_SKILLS = 'skills';
        COLUMN_EMPLOYERS = 'employers';
        COLUMN_ENTERPRISE = 'enterprise';
        
        var columns = [
            new Column('Homepage', '#ccc', 200),
            new Column('Talent', '#eee', 200),
            new Column('Skills', '#ccc', 200),
            new Column('Employers', '#eee', 200),
            new Column('Enterprise', '#ccc', 200),
        ];
        
        var users = new Users(new Data());

        var visualizer = new Visualizer(columns, users);
    });
})(jQuery);