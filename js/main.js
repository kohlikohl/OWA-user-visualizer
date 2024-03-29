
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
            new Column('Homepage', COLUMN_HOMEPAGE, '#967551', 180),
            new Column('Onboarding', COLUMN_ONBOARDING, '#aa0663', 180),
            new Column('Talent', COLUMN_TALENT, '#327fce', 180),
            new Column('Skills', COLUMN_SKILLS, '#ec6400', 180),
            new Column('Employers', COLUMN_EMPLOYERS, '#80b50d', 180),
            new Column('Search', COLUMN_SEARCH, '#452070', 180),
            new Column('Content', COLUMN_CONTENT, '#126c92', 180),
        ];
        
        var data = new Data('http://owa1.bravenewtalent.com/api.php', 'getLivestream');
        var visualizer = new Visualizer(columns);
        var lastLoaded = 0;
        
        var startVisualizing = function(data) {
            console.log('draw');
            var users = new Users(data);
            
            visualizer.setUsers(users);
            visualizer.draw();

            setTimeout(cycle, 1000, data);
        },

        cycle = function(data) {
            var now = Math.round(new Date().getTime() / 1000) + data.timestampDiff;

            if((now - lastLoaded) >= 10){
                data.loadData();
                lastLoaded = now;
            }
            data.currentTimestamp = now;
            startVisualizing(data);
        }
        
        cycle(data);
       
    });
