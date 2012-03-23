
    $(document).ready(function() {
        //Globals
        COLUMN_HOMEPAGE = '/home';
        COLUMN_TALENT = 'talent';
        COLUMN_SKILLS = 'skills';
        COLUMN_EMPLOYERS = 'employers';
        COLUMN_ENTERPRISE = 'enterprise';
        
        var columns = [
            new Column('Homepage', COLUMN_HOMEPAGE, 'transparent', 180),
            new Column('Talent', COLUMN_TALENT, 'transparent', 180),
            new Column('Skills', COLUMN_SKILLS, 'transparent', 180),
            new Column('Employers', COLUMN_EMPLOYERS, 'transparent', 180),
            new Column('Enterprise', COLUMN_ENTERPRISE, 'transparent', 180),
        ];
        
        var users = new Users(new Data('http://owa1.bravenewtalent.com/api.php', 'getLivestream'));
        console.log(users);

        var visualizer = new Visualizer(columns, users);
    });
