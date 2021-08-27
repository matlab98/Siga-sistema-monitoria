CREATE TABLE
IF NOT EXISTS PROGRAMA
(
  id INT
(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  acaProgram VARCHAR
(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE
IF NOT EXISTS `monitor`
(
  id int
(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  doc int
(11) NOT NULL,
  email varchar
(255) NOT NULL,
  name varchar
(255) NOT NULL,
  lastname varchar
(255) NOT NULL,
  id_program INT
(6) UNSIGNED,
  semester int
(11) NOT NULL,
  contact varchar
(255) NOT NULL,
  FOREIGN KEY
(id_program) REFERENCES PROGRAMA
(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE
IF NOT EXISTS `monitoria`
(
  id int
(11) UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  materia varchar
(255) NOT NULL,
  fecha varchar
(255) NOT NULL,
  salon varchar
(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE
IF NOT EXISTS `monitor_monitoria`
(
    id int
(11) UNSIGNED AUTO_INCREMENT,
    monitor_id int
(11) NOT NULL,
    monitoria_id INT
(11) UNSIGNED NOT NULL,
    PRIMARY KEY
(id),
    FOREIGN KEY
(monitor_id) REFERENCES monitor
(id),
    FOREIGN KEY
(monitoria_id) REFERENCES monitoria
(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DELIMITER //
create procedure create_monitor (
  IN docP int,
  IN emailP varchar
(255),
  IN nameP varchar
(255),
  IN lastnameP varchar
(255),
  IN id_programP int,
  IN semesterP int,
  IN contactP varchar
(255))
BEGIN
    insert into monitor
        (doc, email, name, lastname, id_program, semester, contact)
    values
        (docP, emailP, nameP, lastnameP, id_programP, semesterP, contactP);
END
//

create procedure create_program
  (IN idP int,
  IN acaProgramP varchar
(255))
BEGIN
    insert into monitor
        (acaProgram)
    values
        (acaProgramP);
END
//

create procedure allMonitoria
  ()
BEGIN
select monm.id, concat(m.name,' ',m.lastname) as monitor, mon.salon, mon.materia, mon.fecha
    from monitoria mon 
    INNER JOIN monitor_monitoria monm 
    ON mon.id = monm.monitoria_id
    INNER JOIN monitor m 
    ON m.id = monm.monitor_id;
END
//

create procedure allMonitor
  ()
BEGIN
    select *
    from monitor;
END
//

call allMonitoria
();

call allMonitor
();

create procedure create_monitor_monitoria
  (IN idP int,
  IN monitoria_idP int,
  IN materiaP varchar
(255),
  IN salonP varchar
(255),
  IN fechaP varchar
(255))
BEGIN
    insert into monitoria
        (materia, fecha, salon)
    values
        (materiaP, fechaP, salonP);
    insert into monitor_monitoria
        (monitor_id, monitoria_id)
    values
        (idP, monitoria_idP);
END
//

call create_monitor_monitoria (2,1,"Programación", "A11", "Miercoles")

create procedure delete_monitor_monitoria
  (IN idP int,
  IN monitoria_idP int)
BEGIN
    delete from monitoria where id=idP;
    delete from monitor_monitoria where monitoria_id=monitoria_idP and monitor_id=idP;
END
//

insert into PROGRAMA (acaProgram) values ("Ingenieria informatica")//
insert into monitor (doc, email, name, lastname, id_program, semester, contact) values (1233909119, "harrietaruiz19@outlook.com", "Hilder", "Arrieta", 1, 10, "3022976002")//

create procedure update_monitor_monitoria
  (IN idP int,
  IN monitoria_idP int,
  IN materiaP varchar
(255),
  IN salonP varchar
(255),
  IN fechaP varchar
(255))
BEGIN

UPDATE monitoria SET materia = materiaP, fecha = fechaP, salon = salonP WHERE id = monitoria_idP;
UPDATE monitor_monitoria SET monitor_id=idP, monitoria_id=monitoria_idP WHERE id = monitoria_idP;
END//

call update_monitor_monitoria (2, 1, "Axul", "A45", "Jueves")