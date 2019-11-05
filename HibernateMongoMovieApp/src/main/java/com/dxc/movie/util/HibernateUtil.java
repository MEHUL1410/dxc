package com.dxc.movie.util;

import org.hibernate.SessionFactory;
import org.hibernate.ogm.cfg.OgmConfiguration;

public class HibernateUtil {
	
	public static SessionFactory getsSessionFactory() {
		OgmConfiguration configuration = new OgmConfiguration();
		configuration.configure();
		SessionFactory factory = configuration.buildSessionFactory();
		return factory;

	}
}
