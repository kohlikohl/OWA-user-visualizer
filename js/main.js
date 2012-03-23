
    $(document).ready(function() {
        //Globals
        COLUMN_HOMEPAGE = 'hom';
        COLUMN_TALENT = 'talent';
        COLUMN_SKILLS = 'skills';
        COLUMN_EMPLOYERS = 'organisation';
        //COLUMN_ENTERPRISE = 'enterprise';
        COLUMN_SEARCH = 'search';
        COLUMN_CONTENT = 'content';
        COLUMN_ONBOARDING = 'onboarding';
        
        var columns = [
            new Column('Homepage', COLUMN_HOMEPAGE, 'transparent', 180),
            new Column('Onboarding', COLUMN_ONBOARDING, 'transparent', 180),
            new Column('Talent', COLUMN_TALENT, 'transparent', 180),
            new Column('Skills', COLUMN_SKILLS, 'transparent', 180),
            new Column('Employers', COLUMN_EMPLOYERS, 'transparent', 180),
            new Column('Search', COLUMN_SEARCH, 'transparent', 180),
            new Column('Content', COLUMN_CONTENT, 'transparent', 180),
        ];
        
        var data = new Data('http://owa1.bravenewtalent.com/api.php', 'getLivestream');
        
        var startVisualizing = function(data) {
            if(data.dataIsLoaded){
                console.log('draw');
                console.log(users);
                var users = new Users(data);
                var visualizer = new Visualizer(columns, users);
            } else {
                console.log('timeout');
                setTimeout(startVisualizing, 500, data);
            }
        };
        
        startVisualizing(data);
       
    });
